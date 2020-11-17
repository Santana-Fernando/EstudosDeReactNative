import React, {Component} from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import Style from '../estilo'
import MegaNumero from './Numero'

export default class Mega extends Component {
    
    state ={
        quantidadeNumeros: this.props.quantidadeNumeros,
        numeros:[]
    }

    alterarQuantidadeDeNumero = (qunatidade) => {
        this.setState({quantidadeNumeros: Number(qunatidade)})
    }

    gerarNumerosNaoContido = numero => {
        const novoNumero = parseInt(Math.random() * 60) + 1
        return numero.includes(novoNumero) ? this.gerarNumerosNaoContido(numero) : novoNumero

    }

    /*gerarNumeros = () => {
        const numeros = Array(this.state.quantidadeNumeros)
            .fill()
            .reduce(numeros => [...numeros, this.gerarNumerosNaoContido(numeros)], [])
            .sort((a, b) => b - a)
        this.setState({ numeros })
    }*/

    gerarNumeros = () => {
        const { quantidadeNumeros } = this.state
        
        const numeros = []
        for(let i = 0; i < quantidadeNumeros; i++){
            numeros.push(this.gerarNumerosNaoContido(numeros))
        }

        numeros.sort((a, b) => a - b)
        
        this.setState({ numeros })
    }

    exibirNumeros = () =>{
        const numeros = this.state.numeros
        return numeros.map(num => {
            return <MegaNumero key={num} Num={num}/>
        })
    }

    render(){
        return(
            <>
                <Text style={Style.Font}>
                    Gerador de MegaSena
                </Text>
                <TextInput
                    style={{borderBottomWidth: 1}}
                    placeholder="Quantidade de Numeros"
                    value={this.state.quantidadeNumeros}
                    onChangeText={this.alterarQuantidadeDeNumero}
                    keyboardType={'numeric'}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: "row",
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}