import React, {useEffect, useContext} from 'react'
import { Box, Text } from 'react-native-design-utility'
import Slider from '@react-native-community/slider'
import {STATE_PLAYING} from 'react-native-track-player'
import {RouteProp, useNavigation} from '@react-navigation/native'
import { IPodcast } from '../utils/types/Podcast'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ActivityIndicator, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import { Feed, FeedItem } from 'react-native-rss-parser'
import { theme } from '../../theme'
import FeatherIcon from 'react-native-vector-icons/Feather'
//components
import Logo from './components/common/Logo'
import CategoryCard from './components/Home/CategoryCard'
import LinearGradient from 'react-native-linear-gradient'
//context 
import { Context as PlayerContext } from '../context/store/reducers/playerReducer'
import { Context as DownloadContext } from '../context/store/reducers/downloadReducer'
import {Context as PodcastContext} from '../context/store/reducers/podcastReducer'
//image
const logoWhite = '../assets/images/logo_white.png'

const {width, height} = Dimensions.get("window")

type PodcastScreenRouteProp = RouteProp<{Podcast: {podcast: IPodcast}}, 'Podcast'>

const PodcastScreen: React.FC<{route: PodcastScreenRouteProp}> = ({route}) => {
    const {podcast} = route.params
    const {goBack} = useNavigation()
    const {state, setPause, setTrack} = useContext(PlayerContext)
    const { addQueue, ...rest} = useContext(DownloadContext)
    const downloadQueue = rest.state.queue
    
    const {getTracks, ...restdata} = useContext(PodcastContext)
    const feeds: Feed | null = restdata.state.tracks

    const isPlaying = state.playerState === STATE_PLAYING

    const isDownloading = (id: string) => {
        return downloadQueue.find((el: any) => el.id === id)
    }

    useEffect(() => {
        getTracks(podcast.feedUrl)
    }, [])


    const onDownloadPress = (item: FeedItem) => {
        addQueue({
            id: item.id,
            url: item.links[0].url
        })
    }

    return (
        <Box f={1} bg="greyDarkest">
            <Box >
                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <ImageBackground source={{uri: podcast.artworkUrl100}} 
                        style={{width: width, height: 0.4 * height}}
                    >                     
                        <LinearGradient style={{ flex: 1, paddingHorizontal: theme.space.sm, justifyContent: 'space-between'}}  colors={['#242424', '#24242499', 'transparent', 'transparent', '#24242499', '#242424ff', '#242424']}>
                            <Box mt="xs" dir="row" align="center" justify="between">
                                <TouchableOpacity onPress={() => goBack()}>
                                    <FeatherIcon name="arrow-left" size={25} color="white"/>
                                </TouchableOpacity>
                                <Logo dir={require(logoWhite)}/>
                            </Box>
                            <Box pb="xs">                                                         
                                {!isPlaying
                                    ?  (
                                        <>
                                            <Text numberOfLines={1} color="white" weight="bold" size="lg">{podcast.trackName.toUpperCase()}</Text>
                                            <Text color="white" numberOfLines={3}>{feeds?.description}</Text>
                                        </>
                                        )
                                    :   (
                                        <Box>           
                                            <Box bg="greyDarkest" py={1} radius={10} w={110} center>
                                                <Text color={'#50E4C2'} weight="bold" size="xs" >NOW PLAYING</Text>
                                            </Box>
                                            <Box dir="row" justify="between">                                      
                                                <Box w="80%">
                                                    <Text numberOfLines={1} color="white" weight="bold" size="lg">{podcast.trackName.toUpperCase()}</Text>
                                                    <Text color="greyDarker" weight="bold" size="sm" numberOfLines={1}>{state.track?.title}</Text>
                                                </Box>
                                                <Box w="15%">
                                                    <TouchableOpacity onPress={async () => {
                                                        setPause()
                                                    }}>
                                                        <CategoryCard color={'#50E4C2'} icon={`${isPlaying ? "pause" : "play"}`}/>
                                                    </TouchableOpacity>
                                                </Box>
                                            </Box>
                                            <Box >
                                                <Box center>
                                                    <Slider
                                                        style={{height: 40, width: width}}
                                                        minimumValue={0}
                                                        maximumValue={1}
                                                        value={.5}
                                                        minimumTrackTintColor={'#8de4cf'}
                                                        maximumTrackTintColor={theme.color.greyDarker}
                                                        // maximumTrackImage={require(logoGradient)}
                                                        thumbTintColor={'#50E4C2'}
                                                    />    
                                                </Box>
                                                <Box dir="row" justify="between" >
                                                    <Text color="white" size="sm" weight="bold">1:00</Text>
                                                    <Text color="white" size="sm" weight="bold">{state.track?.duration}</Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                        )
                                }
                            </Box>                         
                        </LinearGradient>
                    </ImageBackground>
                    {feeds 
                    ?
                        feeds.items.map((item, i) => (
                        <Box key={item.id} px="sm">
                            <Box dir="row" py="sm" align="center">
                                <TouchableOpacity onPress={async () => {
                                    if (((state.track?.id === item.id) && isPlaying)) {
                                        setPause()
                                    } else {                                 
                                        setTrack({
                                            id: item.id,
                                            url: item.links[0].url,
                                            title: item.title,
                                            artist: podcast.artistName,
                                            artwork: item.itunes.image,
                                            duration: item.itunes.duration
                                        })
                                    }
                                }}>
                                    <CategoryCard color={'#50E4C2'} icon={`${((state.track?.title === item.title) && isPlaying) ? "pause" : "play"}`}/>
                                </TouchableOpacity>
                                <Box ml="sm" f={1}>
                                    <Text size="sm" weight="bold" ls={1.5} color="white" numberOfLines={2}>{item.title}</Text>
                                    <Box dir="row" justify="between">
                                        <Text size="xs" color="grey" weight="bold">{item.itunes.duration}</Text>
                                        <Text size="xs" color="grey" weight="bold">{formatDistanceToNow(new Date(item.published), {addSuffix: true}).trim()}</Text>
                                    </Box>
                                </Box>
                                {isDownloading(item.id)?.state 
                                ? (
                                    <TouchableOpacity onPress={() => {{}}} style={{marginHorizontal: theme.space.sm}}>
                                        <FeatherIcon color={'#50E4C2'} size={25} name="check-circle"/>
                                    </TouchableOpacity>
                                )
                                : (
                                    <TouchableOpacity onPress={() => onDownloadPress(item)} style={{marginHorizontal: theme.space.sm}} disabled={isDownloading(item.id)}>
                                        <FeatherIcon color={'#50E4C2'} size={25} name={`${isDownloading(item.id) ? "x-circle" : "download-cloud"}`}/>
                                    </TouchableOpacity>
                                    )
                                }
                            </Box>
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
