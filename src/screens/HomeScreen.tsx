import React, {useEffect, useState} from 'react'
import {Box, Text} from 'react-native-design-utility'
import {ScrollView } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import { theme } from '../../theme'
//components
import PodcastCard from './components/Home/PodcastCard'
import Header from './components/common/Header'
// import PodcastTile from './components/Home/PodcastTile'
// import CategoryCard from './components/Home/CategoryCard'
//api
import {itunesApiServices} from '../utils/api/itunesApiServices'
import { IPodcast } from '../utils/types/Podcast'
import TrackPlayerServices from '../utils/TrackPlayerServices'

const HomeScreen: React.FC = () => {
    const [podcasts, setPodcasts] = useState<IPodcast[]>([])

    useEffect(() => {
        itunesApiServices.searchPodcast('syntax')
            .then((results: IPodcast[]) => {
                setPodcasts(results)
            })
    }, [])

    useEffect(() => {
        TrackPlayer.setupPlayer()
            .then(() => console.log('Player is setup!'))
        
        TrackPlayer.registerPlaybackService(() => TrackPlayerServices);
    }, [])

    return (
        <ScrollView style={{flex: 1}}>

            <Header title="EXPLORE"/>

            <Box mt="sm">
                <Box ml="sm">
                    <Text size="lg" weight="bold" color="white">Trending</Text>
                </Box>
                <Box 
                    // horizontal 
                    // showsHorizontalScrollIndicator={false}
                    mx="sm"
                    dir="row"
                    pt="sm"
                    flexWrap="wrap"
                    justify="between"
                >
                    {podcasts.map((podcast) => <PodcastCard podcast={podcast} key={podcast.trackId}/>)}
                </Box>
            </Box>

            {/* <Box mt="sm">
                <Box ml="sm">
                    <Text size="lg" weight="bold">Categories</Text>
                </Box>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{marginHorizontal: theme.space.sm, paddingRight: theme.space.sm, paddingVertical: theme.space.sm}}
                >
                    <CategoryCard icon="heart" color={theme.color.red}/>
                    <CategoryCard icon="heart" color={theme.color.red}/>
                    <CategoryCard icon="heart" color={theme.color.red}/>
                    <CategoryCard icon="heart" color={theme.color.red}/>
                    <CategoryCard icon="heart" color={theme.color.red}/>
                </ScrollView>
            </Box> */}
            {/* <Box px="sm">  
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: theme.space.sm}}>
                    {podcasts.map((podcast) => <PodcastTile podcast={podcast} key={podcast.trackId}/>)}
                </ScrollView>
            </Box> */}
        </ScrollView>
    )
}

export default HomeScreen