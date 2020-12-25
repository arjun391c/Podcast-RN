import React, { useState, useEffect, useContext } from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import FeatherIcon from 'react-native-vector-icons/Feather'
import TrackPlayer, {State as TrackPlayerState, STATE_NONE, STATE_PLAYING, STATE_STOPPED} from 'react-native-track-player'
import { Box, Text } from 'react-native-design-utility'
import { theme } from '../../../utils/constants/theme'
import { metrics } from '../../../utils/constants/metrics'
import { routes } from '../../../navigators/routes'
import {Context as PlayerContext} from '../../../context/store/reducers/playerReducer'
//components
import Player from './Player'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ICONS = {
    [routes.HOME]: 'home',
    [routes.LIBRARY]: 'inbox',
    [routes.DOWNLOADS]: 'headphones',
    [routes.PROFILE]: 'user',
}

const TabBar: React.FC<BottomTabBarProps> = (props) => {

    const activeTintColor = '#50E4C2'
    const inactiveTintColor = theme.color.greyLight

    const {state} = useContext(PlayerContext)

    const onTabPress = (routeName: string, routeIndex: number) => {
        props.navigation.navigate(routeName)
    }

    return (
        <>
            {state.track && <Player/>}
            <Box h={50} bg={theme.color.greyDarkest} dir="row">
                {props.state.routes.map((route, index) => {
                    const icon = ICONS[route.name]
                    const color = index === props.state.index ? activeTintColor : inactiveTintColor
                    
                    return (
                       
                        <Box key={route.key} f={1} >
                            <TouchableOpacity
                                onPress={() => onTabPress(route.name, index)}
                                style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}
                            >
                                <FeatherIcon name={icon} color={color} size={metrics.tabIconSize}/>
                            </TouchableOpacity>
                        </Box>
                    )
                })}
            </Box>
        </>
    )
}

export default TabBar
