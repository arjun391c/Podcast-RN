import React from 'react'
import {Box, Text} from 'react-native-design-utility'
import FeatherIcon from 'react-native-vector-icons/Feather'

const CategoryCard: React.FC<{color: string, icon: string}> = ({color, icon}) => {
    const bg = `${color}50`

    return (
        <Box center mr="sm">
            <Box circle={75} bg={bg} center mb={4}>
                <FeatherIcon 
                    name={icon}
                    size={25}
                    color={color}
                />
            </Box>
            <Box>
                <Text size="xs">Education</Text>
            </Box>
        </Box>
    )
}

export default CategoryCard
