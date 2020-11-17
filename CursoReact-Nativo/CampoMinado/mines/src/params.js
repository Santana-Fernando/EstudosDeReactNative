import {Dimensions} from 'react-native'

const params = {
    blockSize: 24,
    borderSize: 2,
    fontSize: 15,
    headerRatio: 0.15, //proporção do paine superior na tela
    difficultLevel: 0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardHeigth = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeigth / this.blockSize)
    }
}

export default params