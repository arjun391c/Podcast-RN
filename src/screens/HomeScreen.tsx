import React, {useEffect, useState, useContext} from 'react'
import {Box, Text} from 'react-native-design-utility'
import { ScrollView, ActivityIndicator } from 'react-native'
import { theme } from '../../theme'
//components
import PodcastCard from './components/Home/PodcastCard'
import Header from './components/common/Header'
// import PodcastTile from './components/Home/PodcastTile'
// import CategoryCard from './components/Home/CategoryCard'
import { IPodcast } from '../utils/types/Podcast'
//context
import {Context as PodcastContext} from '../context/store/reducers/podcastReducer'

const HomeScreen: React.FC = () => {
    // const [podcasts, setPodcasts] = useState<IPodcast[]>([])
    const {state: {podcasts}, searchPodcast} = useContext<{state: {podcasts: IPodcast[]}, searchPodcast: Function}>(PodcastContext)

    useEffect(() => {
        searchPodcast('syntax')
    }, [])

    return (
        <ScrollView style={{flex: 1}}>

            <Header title="EXPLORE"/>

            <Box mt="sm">
                <Box ml="sm">
                    <Text size="lg" weight="bold" color="white">Trending</Text>
                </Box>
                
                {podcasts 
                ?   (
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
                    )
                :   (   
                        <Box center>
                            <ActivityIndicator color={theme.color.white} size="large"/>
                        </Box>
                    )
                }
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