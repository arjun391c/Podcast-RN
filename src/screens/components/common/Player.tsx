import React from 'react'
import { Box, Text } from 'react-native-design-utility'
import { TouchableOpacity } from 'react-native-gesture-handler'
//icons
import FeatherIcon from 'react-native-vector-icons/Feather'
import { theme } from '../../../../theme'
import { useRootStore } from '../../../context/RootStoreContext'
import { observer } from 'mobx-react'
import { metrics } from '../../../utils/constants/metrics'

const Player: React.FC = () => {
    const {playerStore} = useRootStore()
    return (
        <Box h={60} w="100%" bg="greyDarkest" dir="row" align="center" px="sm">
            <Box bg="blue" w={50} h={50} radius={10}>

            </Box>
            <Box dir="row" justify="between" f={1} ml="sm">
                <Box>
                    <Text weight="bold" color="white">Hello</Text>
                </Box>
                <Box dir="row">
                    {playerStore.isPlaying
                        ? (
                            <TouchableOpacity onPress={() => {{}}} hitSlop={metrics.makeHitSlop(20)} style={{marginLeft: theme.space.sm}}>
                                <FeatherIcon name="play" size={25} color="white"/>
                            </TouchableOpacity>
                        )
                        : (
                            <TouchableOpacity onPress={() => {{}}} hitSlop={metrics.makeHitSlop(20)} style={{marginLeft: theme.space.sm}}>
                                <FeatherIcon name="pause" size={25} color="white"/>
                            </TouchableOpacity>
                        )

                    }
                    <TouchableOpacity onPress={() => {{}}} hitSlop={metrics.makeHitSlop(20)} style={{marginLeft: theme.space.sm}}>
                        <FeatherIcon name="rotate-cw" size={25} color="white"/>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box >
    )
}

export default observer(Player)