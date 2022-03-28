import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import tw from 'twrnc';

const Nav = () => {
    return (
        <View style={tw`ml-8 mr-8 mt-6 flex-row justify-evenly text-center bg-gray-800 h-12 rounded-lg`}>
            <View style={tw`flex-row mt-3`}>
                <Image
                    style={{ width: 20, height: 20, tintColor: 'orange', marginRight: 4 }}
                    resizeMode='contain'
                    source={require('./assets/qr-code.png')} />
                <Text style={tw`text-white text-sm `}>Claim</Text>
            </View>

            <View style={tw`flex-row mt-3`}>
                <Image
                    style={{ width: 20, height: 20, tintColor: 'orange', marginRight: 4 }}
                    resizeMode='contain'
                    source={require('./assets/aim.png')} />
                <Text style={tw`text-white text-sm `}>Get Point</Text>
            </View>

            <View style={tw`flex-row mt-3`}>
                <Image
                    style={{ width: 20, height: 20, tintColor: 'orange', marginRight: 4 }}
                    resizeMode='contain'
                    source={require('./assets/credit-card.png')} />
                <Text style={tw`text-white text-sm `}>My Card</Text>
            </View>
        </View>

    )
}

export default Nav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        color: 'white',
    },
    text: {
        flexDirection: 'row',
        color: 'white',
    }
})