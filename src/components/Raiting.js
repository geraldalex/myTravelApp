import React from 'react'
import {  Image, View } from 'react-native'
import {  icons } from '../constants'

const Raiting = ({containarStyle, rate}) => {

    const starComponents = []

    for(let i = 0 ; i < rate; i++){
        starComponents.push(
            <Image
            key={`full-${i}`}
            source={icons.star}
            resizeMode='cover'
            style={{
                marginLeft: i === 0 ? 0 : 5,
                width:15,
                height:15
            }}
            />
        )
    }
    return (
        <View style={{
            flexDirection:'row',
            ...containarStyle
        }}>
            {starComponents}
        </View>
    )
}

export default Raiting


