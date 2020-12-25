import React, { useContext } from 'react'
import { ImageBackground, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
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
//logo
const logoWhite = '../assets/images/logo_white.png'

const {width, height} = Dimensions.get("window")

const TrackScreen: React.FC = () => {
    const { state } = useContext(PlayerContext)
    const { goBack } = useNavigation()

    const isPlaying = state.playerState === STATE_PLAYING

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
                                <TouchableOpacity onPress={async () => {
                                    // setPause()
                                }}>
                                    {/* <CategoryCard color={'#50E4C2'} icon={`${isPlaying ? "pause" : "play"}`}/> */}
                                    <FeatherIcon color={'#50E4C2'} size={25} name="download-cloud"/>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                        <Box h={100}>
                            <Text>Slider</Text>
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
                        style={styles.playButton}>
                        <FeatherIcon name="pause" size={25}/>
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