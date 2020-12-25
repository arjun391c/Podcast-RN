import { SET_PLAYING, SET_PLAYER_STATE, SET_TRACK } from '../actionTypes'
import TrackPlayer, {State as TrackPlayerState, STATE_PAUSED, STATE_PLAYING} from 'react-native-track-player'
// import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage';

interface ITract {
    id: string,
    title: string,
    artist: string,
    duration: number,
    url: string,
    artwork?: string
}

const setPlay = dispatch => async () => {
    await TrackPlayer.play()
    // dispatch({type: SET_PLAYING, payload: true})
}

const setPause = dispatch => async () => {
    await TrackPlayer.pause()
    // dispatch({type: SET_PLAYING, payload: false})
}

const setTrack = dispatch => async (track: ITract) => {
    await TrackPlayer.reset()
    await TrackPlayer.add({
        id: track.id,
        title: track.title,
        artist: track.artist,
        artwork: track.artwork,
        url: track.url,
        duration: track.duration
    })
    
    dispatch({type: SET_TRACK, payload: track})
    setPlay(dispatch)()
    // TrackPlayer.play()
}


// TrackPlayer.addEventListener(
//     'playback-state', 
//     async({ state }: {state: TrackPlayerState}) => {
//         runInAction(() => {
//             console.log('State', state)
//             this._playerState = state
//         })
// })

const setPlayerState = dispatch => async (state) => {
    // await 
    dispatch({type: SET_PLAYER_STATE, payload: state})
}

const actions = { setPlay, setPause, setPlayerState, setTrack }

export default actions