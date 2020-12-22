import React, {useState, useEffect} from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
//navigators
import MainNavigation from './navigators/MainNavigation'
//screens
import SplashScreen from './screens/SplashScreen'

const Routes: React.FC = () => {
    const [isSplash, setSplash] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => setSplash(false), 2000)
    }, [])

    return (
        <>  
            <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
            <SafeAreaView style={{flex: 1}}>
                {isSplash ? <SplashScreen/> : <MainNavigation/>}
            </SafeAreaView>
        </>
    )
}

export default Routes
