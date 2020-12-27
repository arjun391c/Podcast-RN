import React, { useContext } from 'react'
import { ImageBackground, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient'
import { Box, Text } from 'react-native-design-utility'
import FeatherIcon  from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import TrackPlayer, {STATE_PLAYING} from 'react-native-track-player'
import { theme } from '../utils/constants/theme'
//component
import Logo from './components/common/Logo'
//context
import { Context as PlayerContext } from '../context/store/reducers/playerReducer'
import { Context as DownloadContext } from '../context/store/reducers/downloadReducer'
//logo
const logoWhite = '../assets/images/logo_white.png'
const logoGradient = '../assets/images/logo_gradient.png'

const {width, height} = Dimensions.get("window")

const TrackScreen: React.FC = () => {
    const { state, setPause, setPlay } = useContext(PlayerContext)
    const { goBack } = useNavigation()

    const { addQueue, ...rest} = useContext(DownloadContext)
    const downloadQueue = rest.state.queue

    const isPlaying = state.playerState === STATE_PLAYING

    const onDownloadPress = (item: FeedItem) => {
        addQueue({
            id: item.id,
            url: item.url
        })
    }

    const isDownloading = (id: string) => {
        return downloadQueue.find((el: any) => el.id === id)
    }

    return (
        <Box bg="greyDarkest" f={1}>
            <ImageBackground source={{uri: state.track?.artwork}}
                style={{width: width, height: 0.78 * height}}
            >
                <LinearGradient 
                    colors={['#242424', '#24242499', 'transparent', 'transparent', '#24242499', '#242424ee', '#242424', '#242424']}
                    style={{ flex: 1, justifyContent: 'space-between'}}
                >               
                    <Box mt="xs" dir="row" align="center" justify="between" px="sm">
                        <TouchableOpacity onPress={() => goBack()}>
                            <FeatherIcon name="arrow-left" size={25} color="white"/>
                        </TouchableOpacity>
                        <Logo dir={require(logoWhite)}/>
                    </Box>
                    <Box>           
                        <Box bg="greyDarkest" py={1} w={110} mb="sm" center style={{borderBottomEndRadius: 10,borderTopEndRadius: 10}}>
                            <Text color={'#50E4C2'} weight="bold" size="xs">NOW PLAYING</Text>
                        </Box>
                        <Box dir="row" justify="between" px="sm">                                      
                            <Box w="80%">
                                <Text numberOfLines={1} color="white" weight="bold" size="lg">{state.track?.artist}</Text>
                                <Text color="greyDarker" weight="bold" size="sm" numberOfLines={1}>{state.track?.title}</Text>
                            </Box>
                            <Box w="15%" center>
                                {/* To be changed Download */}
                                {isDownloading(state.track?.id)?.state 
                                ? (
                                    <TouchableOpacity onPress={() => {{}}} style={{marginHorizontal: theme.space.sm}}>
                                        <FeatherIcon color={'#50E4C2'} size={25} name="check-circle"/>
                                    </TouchableOpacity>
                                )
                                : (
                                    <TouchableOpacity onPress={() => onDownloadPress(state.track)} style={{marginHorizontal: theme.space.sm}} disabled={isDownloading(state.track?.id)}>
                                        <FeatherIcon color={'#50E4C2'} size={25} name={`${isDownloading(state.track?.id) ? "x-circle" : "download-cloud"}`}/>
                                    </TouchableOpacity>
                                    )
                                }
                            </Box>
                        </Box>
                        <Box h={100} px="sm">
                            <Box mt="lg" center>
                                <Slider
                                    style={{height: 40, width: width}}
                                    minimumValue={0}
                                    maximumValue={1}
                                    value={.5}
                                    minimumTrackTintColor={'#8de4cf'}
                                    maximumTrackTintColor={theme.color.greyDarker}
                                    maximumTrackImage={require(logoGradient)}
                                    thumbTintColor={'#50E4C2'}
                                />    
                            </Box>
                            <Box dir="row" justify="between" >
                                <Text color="white" size="sm" weight="bold">1:00</Text>
                                <Text color="white" size="sm" weight="bold">{state.track?.duration}</Text>
                            </Box>
                        </Box>
                    </Box>
                </LinearGradient>
            </ImageBackground>
            <Box f={1}>
                <Box dir="row" center justify="around">
                    <TouchableOpacity>
                        <FeatherIcon name="shuffle" size={25} color={theme.color.greyDarker}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FeatherIcon name="rewind" size={25} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.playButton}
                        onPress={() => {
                            if(isPlaying) {
                                setPause()
                            } else {
                                setPlay()
                            }
                        }}
                    >
                        <FeatherIcon name={`${isPlaying ? "pause" : "play"}`} size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FeatherIcon name="fast-forward" size={25} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FeatherIcon name="repeat" size={25} color={theme.color.greyDarker}/>
                    </TouchableOpacity>
                </Box>
                <Box center mt="lg">
                    <TouchableOpacity style={styles.queueButton} >
                        <FeatherIcon name="chevron-up" size={16} color="white"/>
                        <Text weight="normal" size={16} color="white" ml="xs">Queue</Text>     
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box>
    )
}

export default TrackScreen

const styles = StyleSheet.create({
    playButton: {
        alignItems: "center", 
        justifyContent: "center", 
        height: 70, 
        width: 70, 
        borderRadius: 35, 
        backgroundColor: '#50E4C2'
    },
    queueButton: {
        backgroundColor: '#61616166',
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        paddingVertical: 3,
        borderRadius: 15,
        flexDirection: "row"
    }
})