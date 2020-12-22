import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//routes
import {routes} from './routes'
//screens
import HomeScreen from '../screens/HomeScreen' 
import DownloadsScreen from '../screens/DownloadsScreen' 
import LibraryScreen from '../screens/LibraryScreen'
import ProfileScreen from '../screens/ProfileScreen'
//icons
import FeatherIcon from 'react-native-vector-icons/Feather'
//constants 
import {metrics} from '../utils/constants/metrics'
import { theme } from '../../theme'

const Tab = createBottomTabNavigator()

const MainTabNavigation: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName: string

                    if (route.name === routes.HOME) iconName = "home"
                    else if (route.name === routes.LIBRARY) iconName = "inbox";
                    else if (route.name === routes.DOWNLOADS) iconName = "headphones";
                    else iconName = "user";
            
                    return (
                        <FeatherIcon
                            name={iconName}
                            size={metrics.tabIconSize}
                            color={color}
                            style={{zIndex: 1}}
                        />
                    );
                },
              })
            }
            tabBarOptions={{
            activeTintColor: theme.color.blueDark,
            inactiveTintColor: theme.color.greyLight,
            showLabel: false
            }}
        >
            <Tab.Screen name={routes.HOME} component={HomeScreen}/>
            <Tab.Screen name={routes.LIBRARY} component={LibraryScreen}/>
            <Tab.Screen name={routes.DOWNLOADS} component={DownloadsScreen}/>
            <Tab.Screen name={routes.PROFILE} component={ProfileScreen}/>
        </Tab.Navigator>
    )
}

export default MainTabNavigation
