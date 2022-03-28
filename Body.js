import React from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedbackBase, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc';
import { USERS } from './data/users';

const Body = () => {
    return (
        <View style={tw`mt-6 ml-5 mr-5`}>


            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-white font-bold text-lg`}>Newspapers</Text>
                <Text style={tw`text-gray-500 underline `}>See more</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              
            </ScrollView>
        </View>


    )
}

export default Body

const styles = StyleSheet.create({
    image: {
        height: 230,
        width: 150,
        borderRadius: 10,
    },
    timeIcon: {
        height: 10,
        width: 20,
        color: 'red'
    }
})