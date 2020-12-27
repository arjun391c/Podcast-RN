import { ADD_QUEUE, SET_PROGRESS, SET_DOWNLOADED } from '../actionTypes'
import actions from '../actions/downloadActions'
import createDataContext from '../createDataContext'

type actionType = {
    type: string,
    payload: any
}

const downloadReducer = (state: any, action: actionType) => {
    console.log(state)
    switch(action.type) {
        case ADD_QUEUE:
            let present = state.queue.find((el: any) => el.id === action.payload.id)
            if(present) {
                return {
                    ...state,
                    queue: state.queue.filter((el: any) => el.id !== action.payload.id)
                }
            }
            return {
                ...state,
                queue: [...state.queue, action.payload]
            }
        case SET_PROGRESS:
            let item = state.queue.find((el: any) => el.id === action.payload.id)
            item.progress = action.payload.progress
            return {
                ...state,
                queue: [...state.queue.filter((el: any) => el.id !== action.payload.id), item]
            }
        case SET_DOWNLOADED:
            let track = state.queue.find((el: any) => el.id === action.payload.id)
            track.state = action.payload.state
            return {
                ...state,
                queue: [...state.queue.filter((el: any) => el.id !== action.payload.id), track]
            }
        default: return state
    }
} 

type IDownloadItem = {
    url: string,
    id: string,
    progress: number
}

type InititalState = {
    queue: [IDownloadItem]
}

const initialState = {
    queue: [],
}

export const { Provider, Context } = createDataContext(
    downloadReducer,
    actions,
    initialState
)