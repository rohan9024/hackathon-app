import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'


const TGB = () => {


    return (
        <View style={tw`flex-1`}>
            <View style={tw`z-1 h-120 w-90 bg-purple-600`}>
                <View style={tw`z-0`}>
                    <Image source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-sea-cliff-girl-book-cover-design-template-0756df626a163a8eede249e808a51554_screen.jpg?ts=1637014031' }}
                        style={tw`z-0 h-120 w-90 opacity-50`} />
                </View>
            </View>


            <View>

                <View style={tw`flex-row mt-10 justify-between bg-transparent`}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 50, height: 20, tintColor: 'orange', marginTop: 20 }}
                            resizeMode='contain'
                            source={require('./assets/back.png')} />

                    </TouchableOpacity>
                    <Text style={tw`text-white mt-5`}>Detail Book</Text>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 50, height: 20, tintColor: 'orange', marginTop: 20 }}
                            resizeMode='contain'
                            source={require('./assets/more-2.png')} />

                    </TouchableOpacity>
                </View>

                <View style={tw``}>

                    <TouchableOpacity onPress={() => navigation.navigate('TGB')}>
                        <Image source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-sea-cliff-girl-book-cover-design-template-0756df626a163a8eede249e808a51554_screen.jpg?ts=1637014031' }} style={styles.bookImage} />
                    </TouchableOpacity>

                </View>


            </View>
        </View>

    )
}

export default TGB

const styles = StyleSheet.create({
    bookImage: {
        alignSelf: 'center',
        width: 140,
        height: 450,
        borderRadius: 10,
        resizeMode: 'contain',
    }

})
