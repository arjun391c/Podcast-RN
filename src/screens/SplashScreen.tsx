import React from 'react'
import {Box, Text} from 'react-native-design-utility' 
import { Image, Dimensions } from 'react-native'
//images 
const logoWhite = '../assets/images/logo_gradient.png'

const {width, height} = Dimensions.get("screen")

const SplashScreen: React.FC = () => {
    return (
        <Box f={1} center>
            <Box /* dir="row" align="center" */>
                <Box w={0.6 * width} h={0.4 * height} center mb="xl">
                    <Image source={require(logoWhite)} style={{resizeMode: 'contain', height: '100%', width: '100%', opacity: .7}}/>
                </Box>
                <Box center>
                    <Text color="white" weight="bold" size="xl" lineH={25} style={{letterSpacing: 3}}>POD</Text>
                    <Text color="white" weight="normal" size="sm" lineH={15} style={{letterSpacing: 1}}>CASTR</Text>
                </Box>
            </Box>
        </Box >
    )
}

export default SplashScreen
