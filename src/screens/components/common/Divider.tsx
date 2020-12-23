import React from 'react'
import { Box } from 'react-native-design-utility'

const Divider: React.FC<{bg: string}> = ({bg}) => <Box h={1} w="100%" bg={bg}/>

export default Divider
