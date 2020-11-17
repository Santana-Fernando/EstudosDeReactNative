import React from 'react'
import { Button } from 'react-native'
import Estilo from './estilo'

export default props =>{

    function executar(){
        console.warn("Executou!!")
    }

    function executar02(){
        console.warn("Executou02!!")
    }
    return(
        <>
            <Button 
                onPress={executar}
                title="Aperte 01"
            />

            <Button 
                onPress={function() {
                    console.warn("Executou02!!")
                }}
                title="Aperte 02"
            />

            <Button 
                onPress={() => {
                    console.warn("Executou03!!")
                }}
                title="Aperte 03"
            />
        </>
    )
}