import { View, Text, Image, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

const Starter = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.view}>
            <View style={{ backgroundColor: 'darkred', borderRadius: 20 }}>
                <Image
                    source={require('./assets/3d.png')}
                    resizeMode="contain"
                    style={{ width: 280, height: 350, marginLeft: 62 }}
                />
            </View>
            <Text style={styles.text}>E-newspaper</Text>
            <Text style={styles.text2}>Read Books from anywhere</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.view3}>
                        <Text style={styles.login} >Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <View style={styles.view4}>
                        <Text style={styles.signup} >Sign Up</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View >
    )
}

export default Starter

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flex: 1,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 90,
        width: 200,
        height: 50,
        borderRadius: 15,
        backgroundColor: "transparent",
        borderColor: 'red',
        borderWidth: 1,
    },
    view3: {
        borderColor: 'black',
        borderWidth: 2,
        width: 120,
        height: 50,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: 40
    },
    view4: {
        borderColor: 'black',
        borderWidth: 2,
        width: 120,
        height: 50,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text: {
        marginTop: 50,
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
    divider: {
        backgroundColor: 'red',
        width: 1,
        height: 30,
    },
    signup: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    login: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        padding: 10,
        color: 'white',
    },
    text2: {
        marginTop: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: '800'
    },
});