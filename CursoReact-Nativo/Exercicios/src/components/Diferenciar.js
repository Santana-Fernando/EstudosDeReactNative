import React from 'react'
import { Text, Platform} from 'react-native'
import Style from './estilo'

export default props =>{

    if(Platform.OS === 'android'){
        
        return  <Text style={Style.Font}>android</Text> 
    }
    else if(Platform.OS === 'ios'){
        return  <Text style={Style.Font}>IOS</Text>
    }else{
        return <Text style={Style.Font}>Eita</Text>
    }
}