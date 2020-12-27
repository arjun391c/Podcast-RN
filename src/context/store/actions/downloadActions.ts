import { ADD_QUEUE, SET_PROGRESS, SET_TRACK, SET_DOWNLOADED } from '../actionTypes'
import RNFetchBlob from 'rn-fetch-blob'
// import TrackPlayer, {State as TrackPlayerState, STATE_PAUSED, STATE_PLAYING} from 'react-native-track-player'
// import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage';

interface Iitem {
    id: string,
    url: string,
    progress?: number
}

const addQueue: React.Dispatch<any> = dispatch => async (item: Iitem) => {
    dispatch({type: ADD_QUEUE, payload: {...item, progress: 0, state: false}})
    startDownload(item, dispatch)
}

const startDownload = (item: Iitem, dispatch: Function) => {
    RNFetchBlob.config({
        fileCache: true,
        appendExt: 'mp3'
    }).fetch('GET' , item.url)
        .progress((written, total) => {
            dispatch({type: SET_PROGRESS, payload: {progress: written / total, id: item.id}})
        })
        .then(res => {
            dispatch({type: SET_DOWNLOADED, payload: {state: true, id: item.id}})
        })
}

const actions = { addQueue }

export default actions