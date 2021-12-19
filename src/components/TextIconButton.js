import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

import { COLORS,SIZES,FONTS, icons } from '../constants'

const TextIconButton = ({label, customContainerStyle, customLableStyle, onPress, icon}) => {
    return (
        <TouchableOpacity style={{
            flexDirection:'row',
            height:60,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.white,
            ...customContainerStyle
        }}
        onPress={onPress}
        >
            <Text style={{marginRight:SIZES.base, ...FONTS.h2, ...customLableStyle}}>{label}</Text>
            <Image
            source={icon}
            style={{
                width:25,
                height:25
            }}
            />
        </TouchableOpacity>
    )
}

export default TextIconButton


