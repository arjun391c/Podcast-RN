import React, {useState, useEffect, useContext} from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import { theme } from '../theme'
import TrackPlayer, {State as TrackPlayerState} from 'react-native-track-player'
import TrackPlayerServices from './utils/TrackPlayerServices'
//navigators
import MainNavigation from './navigators/MainNavigation'
//screens
import SplashScreen from './screens/SplashScreen'
//context
import {Context as PlayerContext} from './context/store/reducers/playerReducer'

const Routes: React.FC = () => {
    const [isSplash, setSplash] = useState<boolean>(true)
    const {setPlayerState} = useContext(PlayerContext)

    useEffect(() => {
        setTimeout(() => setSplash(false), 2000)
    }, [])
    
    useEffect(() => {
        TrackPlayer.setupPlayer()
            .then(() => console.log('Player is setup!'))
    }, [])

    useEffect(() => {
        const trackStateListener = TrackPlayer.addEventListener(
            'playback-state', 
            async({ state }: {state: TrackPlayerState}) => {
                setPlayerState(state)
                // if (state === STATE_PLAYING) {
                //     setPlayerState(true)
                // } else {
                //     setPlayerState(false)
                // }
        })

        return () => trackStateListener.remove()
    }, [])

    return (
        <>  
            <StatusBar backgroundColor={theme.color.greyDarkest} barStyle="light-content"/>
            <SafeAreaView style={{flex: 1, backgroundColor: theme.color.greyDarkest}}>
                {isSplash ? <SplashScreen/> : <MainNavigation/>}
            </SafeAreaView>
        </>
    )
}

export default Routes
