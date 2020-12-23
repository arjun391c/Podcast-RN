import React, {useEffect, useState} from 'react'
import { Box, Text } from 'react-native-design-utility'
import TrackPlayer from 'react-native-track-player'
import {RouteProp, useNavigation} from '@react-navigation/native'
import { IPodcast } from '../utils/types/Podcast'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { feedUrlServices } from '../utils/api/feedUrlServices'
import { Image, ActivityIndicator, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import { Feed } from 'react-native-rss-parser'
import { theme } from '../../theme'
import FeatherIcon from 'react-native-vector-icons/Feather'
//components
import Logo from './components/common/Logo'
// import Divider from './components/common/Divider'
import CategoryCard from './components/Home/CategoryCard'
import LinearGradient from 'react-native-linear-gradient'
//image
const logoWhite = '../assets/images/logo_white.png'

const {width, height} = Dimensions.get("window")

type PodcastScreenRouteProp = RouteProp<{Podcast: {podcast: IPodcast}}, 'Podcast'>

const PodcastScreen: React.FC<{route: PodcastScreenRouteProp}> = ({route}) => {
    const {podcast} = route.params
    const [feed, setfeed] = useState<Feed | null>(null)
    const {goBack} = useNavigation()
    
    useEffect(() => {
        feedUrlServices.getFeed(podcast.feedUrl)
            .then((result) => {
                setfeed(result)
            })
    }, [])

    // if(!feed) return (
    //     <Box f={1} bg="greyDarkest" center>
    //         <ActivityIndicator color={theme.color.white} size="large"/>
    //     </Box>
    // )

    return (
        <Box f={1} bg="greyDarkest">
            <Box >
                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <ImageBackground source={{uri: podcast.artworkUrl100}} 
                        style={{width: width, height: 0.4 * height}}
                    >                     
                        <LinearGradient style={{ flex: 1, paddingHorizontal: theme.space.sm, justifyContent: 'space-between'}}  colors={['#242424', '#24242499', 'transparent', 'transparent', '#24242499', '#242424ee', '#242424ff']}>
                            <Box mt="xs" dir="row" align="center" justify="between">
                                <TouchableOpacity onPress={() => goBack()}>
                                    <FeatherIcon name="arrow-left" size={25} color="white"/>
                                </TouchableOpacity>
                                <Logo dir={require(logoWhite)}/>
                            </Box>
                            <Box pb="xs">                          
                                <Text numberOfLines={1} color="white" weight="bold" size="lg">{podcast.trackName.toUpperCase()}</Text>
                                <Text color="white" numberOfLines={3}>{feed?.description}</Text>
                            </Box>
                        </LinearGradient>
                    </ImageBackground>
                    {feed ?
                    
                    feed.items.map((item, i) => (
                        <Box key={item.id} px="sm">
                            <Box dir="row" py="sm" align="center">
                                {/* <Box h={50} w={50}>
                                    <Image source={{uri: item.itunes.image}} style={{flex: 1}}/>
                                </Box> */}
                                <TouchableOpacity onPress={async () => {
                                    await TrackPlayer.reset()
                                    await TrackPlayer.add({
                                        id: 'unique track id', // Must be a string, required
                                        url: item.links[0].url, // Load media from the network

                                        title: 'Avaritia',
                                        artist: 'deadmau5',
                                        album: 'while(1<2)',
                                        genre: 'Progressive House, Electro House',
                                        date: '2014-05-20T07:00:00+00:00', // RFC 3339
                                    })

                                    TrackPlayer.play()
                                }}>
                                    <CategoryCard color={'#50E4C2'} icon="play"/>
                                </TouchableOpacity>
                                <Box ml="sm" f={1}>
                                    <Text size="sm" weight="bold" ls={1.5} color="white" numberOfLines={2}>{item.title}</Text>
                                    <Box dir="row" justify="between">
                                        <Text size="xs" color="grey" weight="bold">{item.itunes.duration}</Text>
                                        <Text size="xs" color="grey" weight="bold">{formatDistanceToNow(new Date(item.published), {addSuffix: true}).trim()}</Text>
                                    </Box>
                                </Box>
                                <Box mx="sm">
                                    <FeatherIcon color={'#50E4C2'} size={25} name="download-cloud"/>
                                </Box>
                            </Box>
                            {/* {(i != feed.items.length - 1) && <Divider bg="greyDarker"/>} */}
                        </Box>
                    ))
                    : (
                        <Box f={1} center>
                            <ActivityIndicator color={theme.color.white} size="large"/>
                        </Box>
                    )
                    }
                </ScrollView>
            </Box>
        </Box>
    )
}

export default PodcastScreen
