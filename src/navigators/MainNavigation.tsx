import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
//tab
import MainTabNavigation from './MainTabNavigation'
//screens
import PodcastScreen from '../screens/PodcastScreen'
import TrackScreen from '../screens/TrackScreen'
import { routes } from './routes'
import { IPodcast } from '../utils/types/Podcast'
import { truncate } from '../utils/helpers/text'
import { theme } from '../../theme'

type MainStackParams = {
    MainTab: object,
    Podcast: {podcast: IPodcast},
    Track: object
}

const Stack = createStackNavigator<MainStackParams>()

const MainNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // initialRouteName="Track"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="MainTab" component={MainTabNavigation}/>
                <Stack.Screen name="Podcast"
                    component={PodcastScreen}
                    options={({route}) => {
                        return {
                            title: truncate(route.params?.podcast.trackName, 30)
                        }
                    }}
                    />
                <Stack.Screen name="Track"
                    component={TrackScreen}
                    // options={({route}) => {
                    //     return {
                    //         title: truncate(route.params?.podcast.trackName, 30)
                    //     }
                    // }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation
