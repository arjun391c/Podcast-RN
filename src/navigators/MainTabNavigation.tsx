import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//routes
import {routes} from './routes'
//screens
import HomeScreen from '../screens/HomeScreen' 
import DownloadsScreen from '../screens/DownloadsScreen' 
import LibraryScreen from '../screens/LibraryScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

const MainTabNavigation: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={routes.HOME} component={HomeScreen}/>
            <Tab.Screen name={routes.LIBRARY} component={LibraryScreen}/>
            <Tab.Screen name={routes.DOWNLOADS} component={DownloadsScreen}/>
            <Tab.Screen name={routes.PROFILE} component={ProfileScreen}/>
        </Tab.Navigator>
    )
}

export default MainTabNavigation
