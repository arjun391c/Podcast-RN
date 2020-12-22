import React, {useEffect, useState} from 'react'
import {Box, Text} from 'react-native-design-utility'
import {ScrollView} from 'react-native'
import { theme } from '../../theme'
//components
import PodcastCard from './components/Home/PodcastCard'
import PodcastTile from './components/Home/PodcastTile'
import CategoryCard from './components/Home/CategoryCard'
//api
import {itunesApiServices} from '../utils/api/itunesApiServices'
import { IPodcast } from '../utils/types/Podcast'

const HomeScreen: React.FC = () => {
    const [podcasts, setPodcasts] = useState<IPodcast[]>([])

    useEffect(() => {
        itunesApiServices.searchPodcast('syntax')
            .then((results: IPodcast[]) => {
                setPodcasts(results)
            })
    }, [])

    return (
        <Box f={1} bg="white">
            <Box mt="sm">
                <Box ml="sm">
                    <Text size="lg" weight="bold">Trending</Text>
                </Box>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{marginHorizontal: theme.space.sm, paddingRight: theme.space.sm, paddingVertical: theme.space.sm}}
                >
                    {podcasts.map((podcast) => <PodcastCard podcast={podcast} key={podcast.trackId}/>)}
                </ScrollView>
            </Box>

            <Box mt="sm">
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
            </Box>
            <ScrollView>
                {podcasts.map((podcast) => <PodcastTile podcast={podcast} key={podcast.trackId}/>)}
            </ScrollView>
        </Box>
    )
}

export default HomeScreen