import React, {useState, useEffect, useContext} from 'react'
import { Box, Text } from 'react-native-design-utility'
import { useNavigation } from '@react-navigation/native'
import { Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
//icons
import FeatherIcon from 'react-native-vector-icons/Feather'
import { theme } from '../../../../theme'
import { observer } from 'mobx-react'
import { metrics } from '../../../utils/constants/metrics'
//context
import {Context as PlayerContext} from '../../../context/store/reducers/playerReducer'
//
import {STATE_PLAYING} from 'react-native-track-player'
import { routes } from '../../../navigators/routes'
import TrackPlayer from 'react-native-track-player'

const Player: React.FC = () => {
    const {state, setPlay, setPause, seekPlus} = useContext(PlayerContext)
    const { navigate } = useNavigation()

    return (
        <TouchableWithoutFeedback
            onPress={() => navigate(routes.TRACK)}
        >
            <Box h={60} w="100%" bg="greyDarkest" dir="row" align="center" px="sm" 
                style={{borderBottomColor: `#00000022`, borderBottomWidth: 1, borderTopColor: "#ffffff88", borderTopWidth: 2}}
            >
                <Box bg="blue" w={45} h={45} radius={10}>
                    <Image source={{uri: state.track?.artwork}} style={{flex: 1, borderRadius: 8}}/>
                </Box>
                <Box dir="row" justify="between" f={1} ml="sm">
                    <Box w="70%">
                        <Text weight="bold" color="white" numberOfLines={1}>{state.track?.title}</Text>
                    </Box>
                    <Box dir="row">
                        {state.playerState !== STATE_PLAYING
                            ? (
                                <TouchableOpacity onPress={() => setPlay()} hitSlop={metrics.makeHitSlop(20)} style={{marginLeft: theme.space.sm}}>
                                    <FeatherIcon name="play" size={25} color="white"/>
                                </TouchableOpacity>
                            )
                            : (
                                <TouchableOpacity onPress={() => setPause()} hitSlop={metrics.makeHitSlop(20)} style={{marginLeft: theme.space.sm}}>
                                    <FeatherIcon name="pause" size={25} color="white"/>
                                </TouchableOpacity>
                            )

                        }
                        <TouchableOpacity onPress={() => seekPlus(30)} hitSlop={metrics.makeHitSlop(20)} style={{marginLeft: theme.space.sm}}>
                            <FeatherIcon name="rotate-cw" size={25} color="white"/>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Box >
        </TouchableWithoutFeedback>
    )
}

export default observer(Player)