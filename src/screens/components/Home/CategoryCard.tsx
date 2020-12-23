import React from 'react'
import {Box, Text} from 'react-native-design-utility'
import FeatherIcon from 'react-native-vector-icons/Feather'

const CategoryCard: React.FC<{color: string, icon: string}> = ({color, icon}) => {
    const bg = `${color}50`

    return (
        <Box center>
            <Box circle={45} center mb={4} style={{borderWidth: 1, borderColor: bg}}>
                <FeatherIcon 
                    name={icon}
                    size={15}
                    color={color}
                />
            </Box>
            {/* <Box>
                <Text size="xs">Education</Text>
            </Box> */}
        </Box>
    )
}

export default CategoryCard
