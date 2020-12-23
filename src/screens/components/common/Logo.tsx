import React, {useEffect} from 'react'
import { Box, Text } from 'react-native-design-utility'
import { Image } from 'react-native'

interface Props {
    dir: any
}

const Logo: React.FC<Props> = ({dir}) => {  

    return (
        <Box mt="xs" dir="row" align="center">
            <Box w={35} h={35} center mr="xs">
                <Image source={dir} style={{ height: '100%', width: '100%'}}/>
            </Box>
            <Box>
                <Text color="white" weight="bold" size="lg" lineH={20}>POD</Text>
                <Text color="white" weight="normal" size="sm" lineH={15}>CASTR</Text>
            </Box>
        </Box>
    )
}

export default Logo
