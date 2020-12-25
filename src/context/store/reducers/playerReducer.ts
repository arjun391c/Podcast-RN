import { SET_PLAYING, SET_PLAYER_STATE, SET_TRACK } from '../actionTypes'
import actions from '../actions/playerActions'
import createDataContext from '../createDataContext'

type actionType = {
    type: string,
    payload: any
}

const playerReducer = (state: object, action: actionType) => {
    switch(action.type) {
        case SET_PLAYING:
            return {
                ...state,
                isPlaying: action.payload
            }
        case SET_PLAYER_STATE:
            return {
                ...state,
                playerState: action.payload
            }
        case SET_TRACK:
            return {
                ...state,
                track: action.payload
            }
        default: return state
    }
} 



const initialState = {
    playerState: null,
    isPlaying: null,
    track: null
}

export const { Provider, Context } = createDataContext(
    playerReducer,
    actions,
    initialState
)