import React from 'react'
import { Image } from 'react-native'
import {Box, Text} from 'react-native-design-utility'
import { theme } from '../../../../theme'
import { IPodcast } from '../../../utils/types/Podcast'

const PodcastCard: React.FC<{podcast: IPodcast}> = ({podcast}) => {
    return (
        <Box w={100} h={100} 
            radius="xs" mr="sm" 
            shadow={1}
            style={{
                elevation: 10,              
                backgroundColor: '#fff',
                shadowColor: '#333',
                shadowRadius: 2,
                shadowOpacity: 0.2,
                shadowOffset: {
                width: 0,
                height: 1,
                },
            }}
        >
            <Image 
                style={{flex: 1, borderRadius: theme.radius.xs}}
                source={{uri: podcast.artworkUrl100}}
            />
        </Box>
    )
}

export default PodcastCard
