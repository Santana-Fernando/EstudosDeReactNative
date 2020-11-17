import React, {useState} from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Filho from './Filhor'

export default props =>{

    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto){
        setNum(numero)
        setTexto(texto)
    }
    return (
        <>
            <Text style={Estilo.Font}>
                {texto}:{num}
            </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}