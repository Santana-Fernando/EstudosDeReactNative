import React, {useState}from 'react'
import { Text } from 'react-native'
import Style from '../estilo'
import ContadorDisplay from './contadorDisplay'
import Botoes from './botoes';

export default props =>{
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1);
    const dec = () => setNum(num - 1);

    return (
        <>    
            <Text style={Style.Font}>
                Contador
            </Text>
            <ContadorDisplay num={num}/>
            <Botoes inc={inc} dec={dec}/>
        </>
    )
}