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

const setPlay: React.Dispatch<any> = dispatch => async () => {
    await TrackPlayer.play()
    // dispatch({type: SET_PLAYING, payload: true})
}

const setPause: React.Dispatch<any>  = dispatch => async () => {
    await TrackPlayer.pause()
    // dispatch({type: SET_PLAYING, payload: false})
}

const setTrack: React.Dispatch<any>  = dispatch => async (track: ITract) => {
    await TrackPlayer.reset()
    await TrackPlayer.add({
        id: track.id,
        title: track.title,
        artist: track.artist,
        artwork: track.artwork,
        url: track.url,
        duration: track.duration
    })
    
    await TrackPlayer.play()
    dispatch({type: SET_TRACK, payload: track})
    // setPlay(dispatch)()
}

const seekPlus: React.Dispatch<any>  = dispatch => async (value: number) => {
    const position = await TrackPlayer.getPosition()
    await TrackPlayer.seekTo(position + value)
}

const setPlayerState: React.Dispatch<any>  = dispatch => async (state: number) => {
    // await 
    dispatch({type: SET_PLAYER_STATE, payload: state})
}

const actions = { setPlay, setPause, setPlayerState, setTrack, seekPlus }

export default actions