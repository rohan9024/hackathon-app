import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc';

const BottomTab = () => {

    const navigation = useNavigation();
    
    return (
        <View style={styles.tabs}>
            <View style={tw`flex-row justify-evenly `}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Image
                        style={{ width: 50, height: 20, tintColor: 'orange', marginTop: 20 }}
                        resizeMode='contain'
                        source={require('./assets/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={{ width: 50, height: 20, tintColor: 'orange', marginTop: 20 }}
                        resizeMode='contain'
                        source={require('./assets/search.png')} />

                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={{ width: 50, height: 20, tintColor: 'orange', marginTop: 20 }}
                        resizeMode='contain'
                        source={require('./assets/notification.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={{ width: 50, height: 20, tintColor: 'orange', marginTop: 20 }}
                        resizeMode='contain'
                        source={require('./assets/more.png')} />
                </TouchableOpacity>




            </View>
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    tabs: {
        width: 355,
        height: 60,
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'black',
        zIndex: 1,
    },
})