import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tab from './Tab.js'

export default props => (
    <SafeAreaView style={{
        flex: 1
    }}>
        <NavigationContainer>
            <Tab />
        </NavigationContainer>
    </SafeAreaView>
)