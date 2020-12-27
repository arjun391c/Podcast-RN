import React from 'react'
//providers
import {Provider as PlayerProvider} from './reducers/playerReducer'
import {Provider as DownloadProvider} from './reducers/downloadReducer'
import {Provider as PodcastProvider} from './reducers/podcastReducer'

const Store: React.FC = (props) => {
    return (
        <PodcastProvider>
            <DownloadProvider>
                <PlayerProvider>
                    {props.children}
                </PlayerProvider>
            </DownloadProvider>
        </PodcastProvider>
    )
}

export default Store
