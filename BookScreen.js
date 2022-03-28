import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc';

const BookScreen = () => {
    return (
        <View style={tw`bg-black flex-1`}>
            <Text style={tw`text-white`}>This is BookScreen</Text>
        </View>
    )
}

export default BookScreen
