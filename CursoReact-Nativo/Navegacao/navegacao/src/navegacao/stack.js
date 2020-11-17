import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoSteck from '../components/passoSteck'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA">
            {props => (
                <PassoSteck {...props} avancar="TelaB">
                    <TelaA/>
                </PassoSteck>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <PassoSteck {...props} voltar avancar="TelaC" avancarParams={{numero: 1007}}>
                    <TelaB/>
                </PassoSteck>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoSteck {...props} voltar avancar="TelaC">
                    <TelaC {...props}/>
                </PassoSteck>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)