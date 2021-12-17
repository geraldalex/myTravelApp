import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image, 
    Animated
} from 'react-native';
import { HeaderBar } from '../components';

import { COLORS, FONTS, icons, SIZES } from '../constants';



const Place = ({navigation, route}) => {

const [selectedPlace, setSelectedPlace]    = React.useState(null)

React.useEffect(() => {
let {selectedPlace} = route.params
setSelectedPlace(selectedPlace)
}, [])

function renderPlace() {
    return(
        <ImageBackground
        source={selectedPlace?.image}
       
        style={{
            width:"100%",
            height:"100%"
        }}
        >
<HeaderBar
title=''
leftOnPress = {() => navigation.goBack()}
right={false}
containerStyle={{
    marginTop: SIZES.padding*2
}}
/>
        </ImageBackground>
    )
}

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {renderPlace()}
        </View>
    )
}

export default Place;