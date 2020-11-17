import React from 'react'
import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/passoSteck'

export default props => {
    return(
        <PassoStack>
            <TextoCentral 
                corDoTexto="red" 
                corDeFundo="blue" 
                children="Tela A"
            />
        </PassoStack>
    )
}