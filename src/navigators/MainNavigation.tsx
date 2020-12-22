import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
//tab
import MainTabNavigation from './MainTabNavigation'

const Stack = createStackNavigator()

const MainNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="mainTab" component={MainTabNavigation}/>
                {/* <Stack.Screen name=""/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation
