import React from 'react'
import {useFocusEffect} from '@react-navigation/native'
import { StatusBar, StatusBarStyle } from 'react-native'

const useStatusBar = (style: StatusBarStyle, animated: boolean = true) => {
    useFocusEffect(React.useCallback(() => {
        StatusBar.setBarStyle(style, animated)
    }, []))
}   

export default useStatusBar