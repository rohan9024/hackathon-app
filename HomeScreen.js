import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from './Header'
import Nav from './Nav'
import tw from 'twrnc';
import Body from './Body';
import FooterBody from './FooterBody';
import BottomTab from './BottomTab';

const HomeScreen = () => {


    return (
        <View style={tw`bg-black flex-1`} >
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <Header />
                {/* <Nav /> */}
                <Body />
                <FooterBody />
            </ScrollView >
            <BottomTab />
        </View>
    )
}

export default HomeScreen
