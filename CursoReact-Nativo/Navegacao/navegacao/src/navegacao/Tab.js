import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    switch (route.name) {
                        case 'TelaA':
                            iconName = focused
                                ? "ios-information-circle"
                                : "ios-information-circle-outline"
                            break
                        case 'TelaB':
                            iconName = focused
                                ? "ios-information-circle"
                                : "ios-information-circle-outline"
                            break
                        case 'TelaC':
                            iconName = focused ? "list" : "list-outline"
                            break
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
            initialRouteName="TelaC" tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'blue',
                showLabel: false,
                /*labelStyle: {
                    fontSize: 30
                }*/
            }}
        >
            <Tab.Screen name="TelaA" component={TelaA} />
            <Tab.Screen name="TelaB" component={TelaB} />
            <Tab.Screen name="TelaC" component={TelaC} />
        </Tab.Navigator>
    )
}