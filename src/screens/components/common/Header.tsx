import React from 'react'
import { Box, Text } from 'react-native-design-utility'
import { Image, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { theme } from '../../../../theme'
//components
import Logo from './Logo'
//image
// import logoGradient from '../../../assets/images/logo_gradient.png'
const logo = '../../../assets/images/logo_dark.jpg'
const logoGradient = '../../../assets/images/logo_gradient.png'

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({title}) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box justify="end" px="sm" style={{}}>
            <ImageBackground
                source={require(logo)}
                style={{width: '100%'}}
                imageStyle={{width: '80%', resizeMode: 'contain', marginLeft: '60%', marginBottom: '10%', opacity: .1, overflow: 'hidden'}}
            >
                <Logo dir={require(logoGradient)}/>
                <Box mt={100}>
                    <Text color="white" size="2xl" weight="bold" style={{letterSpacing: 4}}>{title}</Text>
                </Box>
                <Box>
                    <Text color="greyDark" weight="bold">all your favourite podcast</Text>
                    <Text color="greyDark" weight="bold">under one roof!</Text>
                </Box>
                <Box dir="row" align="center" justify="between" px="sm" mt="sm" radius={50} style={{borderColor: '#fff', borderWidth: 2}}>
                    <TextInput placeholder="Search all podcasts" placeholderTextColor={theme.color.greyDarker} style={{fontWeight: 'bold', width: '90%', color: '#fff', letterSpacing: 1.5}}/>
                    <FeatherIcon name="search" size={20} color={theme.color.greyDarker}/>
                </Box>
            </ImageBackground>
        </Box>
        </TouchableWithoutFeedback>
    )
}

export default Header
