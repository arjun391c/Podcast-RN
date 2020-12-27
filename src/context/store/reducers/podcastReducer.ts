import {SET_PODCASTS, SET_TRACKS} from '../actionTypes'
import actions from '../actions/podcastActions'
import createDataContext from '../createDataContext'

type actionType = {
    type: string,
    payload: any
}

const podcastReducer = (state: object, action: actionType) => {
    switch(action.type) {
        case SET_PODCASTS:
            return {
                ...state,
                podcasts: action.payload
            }
        case SET_TRACKS:
            return {
                ...state,
                tracks: action.payload
            }
        default: return state
    }
}

const initialState = {
    podcasts: null,
    error: null,
    tracks: null
}

export const { Provider, Context } = createDataContext(
    podcastReducer,
    actions,
    initialState
)