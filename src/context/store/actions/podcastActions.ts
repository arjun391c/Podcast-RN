import { IPodcast } from '../../../utils/types/Podcast'
import {SET_PODCASTS, SET_TRACKS} from '../actionTypes'
import * as rssParser from 'react-native-rss-parser';

const baseUrl: string = 'https://itunes.apple.com/search'

const searchPodcast: React.Dispatch<any> = dispatch => async (term: string) => {
    try {
        const url = `${baseUrl}?entity=podcast&term=${term}`
        const res = await fetch(url, { method: 'GET' })
        const resJson = await res.json() as {results: IPodcast[]}

        dispatch({type: SET_PODCASTS, payload: resJson.results})
    } catch(err) {
        console.log("error fetching search podcasts")
    }
}  

const getTracks: React.Dispatch<any> = dispatch => async (feedUrl: string) => {
    try {
        //fix and remove
        dispatch({type: SET_TRACKS, payload: null})

        const res = await fetch(feedUrl, {method: 'GET'})
        const resText = await res.text()
        const data = await rssParser.parse(resText)

        dispatch({type: SET_TRACKS, payload: data})
    } catch(err) {
        console.log("Error fetching Tracks")
    }
}

const actions = {
    searchPodcast,
    getTracks
}

export default actions 