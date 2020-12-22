import React from 'react'
import {Box, Text} from 'react-native-design-utility'
import {ScrollView} from 'react-native'
import { theme } from '../../theme'
//components
import PodcastCard from './components/Home/PodcastCard'
import CategoryCard from './components/Home/CategoryCard'

const HomeScreen: React.FC = () => {
    return (
        <Box f={1} bg="white">
            <Box mt="sm">
                <Box mb={10} ml="sm">
                    <Text size="lg" weight="bold">Trending</Text>
                </Box>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{marginHorizontal: theme.space.sm, paddingRight: theme.space.sm}}
                >
                    <PodcastCard/>
                    <PodcastCard/>
                    <PodcastCard/>
                    <PodcastCard/>
                    <PodcastCard/>
                </ScrollView>
            </Box>

            <Box mt="sm">
                <Box mb={10} ml="sm">
                    <Text size="lg" weight="bold">Categories</Text>
                </Box>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{marginHorizontal: theme.space.sm, paddingRight: theme.space.sm}}
                >
                    <CategoryCard icon="heart" color={theme.color.red}/>
                    <CategoryCard icon="heart" color={theme.color.red}/>
                    <CategoryCard icon="heart" color={theme.color.red}/>
                    <CategoryCard icon="heart" color={theme.color.red}/>
                    <CategoryCard icon="heart" color={theme.color.red}/>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default HomeScreen