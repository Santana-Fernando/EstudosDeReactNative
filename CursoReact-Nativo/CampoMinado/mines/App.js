import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import LevelSelection from './src/screems/LevelSelection'
import params from './src/params'
import MineField from './src/components/MineField'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions'
import Header from './src/components/Header'


export default class App extends Component { 

  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Perdeu meu caro, Realmente é uma pena', 'Lamentável')
    }

    if(won){
      Alert.alert('Parabens meu caro')
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)
    if(won){
      Alert("Ganhouuuuuuu!! Parabens mano/mana")
    }

    this.setState({board, won})
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render(){
    return (
      <View style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false})}
        />
        <Header 
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} 
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true})}
        />
        <View style={styles.board}>
          <MineField board={this.state.board}
          onOpenField={this.onOpenField}
          onSelectField={this.onSelectField}            
          />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end'
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  board:{
     alignItems: 'center',
     backgroundColor: '#AAA'
  }
});
