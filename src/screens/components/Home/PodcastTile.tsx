import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Box, Text} from 'react-native-design-utility'
//constants
import { IPodcast } from '../../../utils/types/Podcast'
import { routes } from '../../../navigators/routes'

const Divider = () => <Box h={1} w="100%" bg="greyLightest"/>

const PodcastTile: React.FC<{podcast: IPodcast}> = ({podcast}) => {
    const {navigate} = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigate(routes.PODCAST, {podcast})}>
            <Box dir="row" align="center">
                <Box w={100} h={100} 
                    radius="xs" mr="xs" 
                >
                    <Image 
                        style={{flex: 1}}
                        source={{uri: podcast.artworkUrl100}}
                    />
                </Box>

                <Box f={1}>
                    <Text size="sm" weight="bold" numberOfLines={1}>{podcast.trackName}</Text>
                </Box>
            </Box>
            <Divider/>
        </TouchableOpacity>
    )
}

export default PodcastTile
