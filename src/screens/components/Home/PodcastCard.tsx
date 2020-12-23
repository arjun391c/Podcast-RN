import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { Image, TouchableOpacity } from 'react-native'
import {Box, Text} from 'react-native-design-utility'
import { theme } from '../../../../theme'
import { IPodcast } from '../../../utils/types/Podcast'
import { routes } from '../../../navigators/routes'

const PodcastCard: React.FC<{podcast: IPodcast}> = ({podcast}) => {
    const {navigate} = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigate(routes.PODCAST, {podcast})} style={{width: '30%', marginBottom: theme.space.lg}}>
            <Box  h={130} 
                radius="sm" 
                mb="sm"
                shadow={1}
                style={{
                    elevation: 10,              
                    backgroundColor: '#fff',
                    shadowColor: '#fff',
                    shadowRadius: 2,
                    shadowOpacity: 0.2,
                    shadowOffset: {
                    width: 0,
                    height: 1,
                    },
                }}
            >
                <Image 
                    style={{flex: 1, borderRadius: theme.radius.sm}}
                    source={{uri: podcast.artworkUrl100}}
                />
            </Box>
            <Box>
                <Text color="white" weight="bold" style={{letterSpacing: 1.5}} size="sm" numberOfLines={1}>{podcast.trackName}</Text>
            </Box>
        </TouchableOpacity>
    )
}

export default PodcastCard
