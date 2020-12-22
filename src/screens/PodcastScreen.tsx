import React from 'react'
import { Box, Text } from 'react-native-design-utility'
import {RouteProp} from '@react-navigation/native'
import { IPodcast } from '../utils/types/Podcast'

type PodcastScreenRouteProp = RouteProp<{Podcast: {podcast: IPodcast}}, 'Podcast'>

const PodcastScreen: React.FC<{route: PodcastScreenRouteProp}> = ({route}) => {
    const {podcast} = route.params

    return (
        <Box f={1} bg="white">
            <Text>{podcast.trackName}</Text>
        </Box>
    )
}

export default PodcastScreen
