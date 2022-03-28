import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Tab, TabView } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default FooterBody = () => {

    const navigation = useNavigation();

    const [BestSeller, setBestSeller] = useState(true);
    const [TheLatest, setTheLatest] = useState(false);
    const [ComingSoon, setComingSoon] = useState(false);

    const scaleBS = useRef(new Animated.Value(0)).current;
    const scaleTL = useRef(new Animated.Value(0)).current;
    const scaleCS = useRef(new Animated.Value(0)).current;

    const Tab = createBottomTabNavigator();

    useEffect(() => {
        Animated.timing(scaleBS, {
            toValue: BestSeller ? 1 : 0,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, [BestSeller]);

    useEffect(() => {
        Animated.timing(scaleTL, {
            toValue: TheLatest ? 1 : 0,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, [TheLatest]);

    useEffect(() => {
        Animated.timing(scaleCS, {
            toValue: ComingSoon ? 1 : 0,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, [ComingSoon]);

    return (
        <View>
            <View>
                <View style={tw`mt-9 ml-1 flex-row justify-evenly`}>

                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setBestSeller(true);
                                setTheLatest(false);
                                setComingSoon(false);
                            }}>
                            <Text style={tw.style('text-white text-lg', BestSeller && 'text-yellow-500 font-bold')}>Best Seller</Text>
                            <Animated.View
                                style={{
                                    width: 90,
                                    height: 3,
                                    backgroundColor: 'orange',
                                    transform: [{ scaleX: scaleBS }]
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => {
                            setBestSeller(false);
                            setTheLatest(true);
                            setComingSoon(false);
                        }}>
                            <Text style={tw.style('text-white text-lg', TheLatest && 'text-yellow-500 font-bold')}>The Latest</Text>

                            <Animated.View
                                style={{
                                    width: 90,
                                    height: 3,
                                    backgroundColor: 'orange',
                                    transform: [{ scaleX: scaleTL }]
                                }}
                            />

                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {
                            setBestSeller(false);
                            setTheLatest(false);
                            setComingSoon(true);
                        }}>
                            <Text style={tw.style('text-white text-lg', ComingSoon && 'text-yellow-500 font-bold')}>Coming Soon</Text>
                            <Animated.View
                                style={{
                                    width: 117,
                                    height: 3,
                                    backgroundColor: 'orange',
                                    transform: [{ scaleX: scaleCS }]
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

                {/* Book 1 */}
                {BestSeller ?
                    <View>
                        <View style={tw`mt-4 ml-1`}>
                            <View style={tw`flex-row`}>
                                <TouchableOpacity onPress={() => navigation.navigate('TGB')}>
                                    <Image source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-sea-cliff-girl-book-cover-design-template-0756df626a163a8eede249e808a51554_screen.jpg?ts=1637014031' }} style={styles.bookImage} />
                                </TouchableOpacity>

                                <View style={tw`flex-col ml-1`}>
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-white font-bold text-base`}>The Girl Behind</Text>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                            resizeMode='contain'
                                            source={require('./assets/save.png')} />
                                    </View>
                                    <Text style={tw`text-gray-500 font-extrabold text-xs mt-1 `}>Adamantha Smith</Text>

                                    <View style={tw`flex-row mt-4 mb-3`}>
                                        <View style={tw`flex-row mr-3`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/copy-2.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>160p</Text>
                                        </View>
                                        <View style={tw`flex-row`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/see.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>1m</Text>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row justify-between`}>
                                        <View style={tw`bg-indigo-800 mr-2 w-12 h-6 rounded-md mt-2`}><Text style={tw`text-blue-600 text-center text-xs mt-1`}>Drama</Text></View>
                                        <View style={tw`bg-red-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-red-600 text-xs text-center mt-1`}>Romance</Text></View>
                                        <View style={tw`bg-green-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-green-600 text-xs text-center mt-1`}>Adventure</Text></View>
                                    </View>
                                </View>

                            </View>

                        </View>

                        {/* Book 2 */}
                        <View style={tw`mt-4 ml-1`}>
                            <View style={tw`flex-row`}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.bookImage} />
                                </TouchableOpacity>

                                <View style={tw`flex-col ml-1`}>
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-white font-bold text-base`}>City on the Edge</Text>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                            resizeMode='contain'
                                            source={require('./assets/save.png')} />
                                    </View>
                                    <Text style={tw`text-gray-500 font-extrabold text-xs mt-1 `}>Mark Goldman</Text>

                                    <View style={tw`flex-row mt-4 mb-3`}>
                                        <View style={tw`flex-row mr-3`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/copy-2.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>300p</Text>
                                        </View>
                                        <View style={tw`flex-row`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/see.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>1.2m</Text>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row justify-between`}>
                                        <View style={tw`bg-indigo-800 mr-2 w-12 h-6 rounded-md mt-2`}><Text style={tw`text-blue-600 text-center text-xs mt-1`}>Drama</Text></View>
                                        <View style={tw`bg-red-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-red-600 text-xs text-center mt-1`}>Romance</Text></View>
                                        <View style={tw`bg-green-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-green-600 text-xs text-center mt-1`}>Adventure</Text></View>
                                    </View>
                                </View>

                            </View>

                        </View>
                        {/* Book 3 */}
                        <View style={tw`mt-4 ml-1`}>
                            <View style={tw`flex-row`}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.bookImage} />
                                </TouchableOpacity>

                                <View style={tw`flex-col ml-1`}>
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-white font-bold text-base`}>The Girl Behind</Text>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                            resizeMode='contain'
                                            source={require('./assets/save.png')} />
                                    </View>
                                    <Text style={tw`text-gray-500 font-extrabold text-xs mt-1 `}>Adamantha Smith</Text>

                                    <View style={tw`flex-row mt-4 mb-3`}>
                                        <View style={tw`flex-row mr-3`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/copy-2.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>670p</Text>
                                        </View>
                                        <View style={tw`flex-row`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/see.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>2.3m</Text>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row justify-between mb-20`}>
                                        <View style={tw`bg-indigo-800 mr-2 w-12 h-6 rounded-md mt-2`}><Text style={tw`text-blue-600 text-center text-xs mt-1`}>Drama</Text></View>
                                        <View style={tw`bg-red-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-red-600 text-xs text-center mt-1`}>Romance</Text></View>
                                        <View style={tw`bg-green-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-green-600 text-xs text-center mt-1`}>Adventure</Text></View>
                                    </View>
                                </View>

                            </View>

                        </View>
                    </View>

                    : null}

                {TheLatest ?

                    <View>
                        <View style={tw`mt-4 ml-1`}>
                            <View style={tw`flex-row`}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://media.shortform.com/covers/png/cant-hurt-me-cover@8x.png' }} style={styles.bookImage} />
                                </TouchableOpacity>

                                <View style={tw`flex-col ml-1`}>
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-white font-bold text-base`}>Can't Hurt Me</Text>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                            resizeMode='contain'
                                            source={require('./assets/save.png')} />
                                    </View>
                                    <Text style={tw`text-gray-500 font-extrabold text-xs mt-1 `}>David Goggins</Text>

                                    <View style={tw`flex-row mt-4 mb-3`}>
                                        <View style={tw`flex-row mr-3`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/copy-2.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>450p</Text>
                                        </View>
                                        <View style={tw`flex-row`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/see.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>1.7m</Text>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row justify-between`}>
                                        <View style={tw`bg-indigo-800 mr-2 w-12 h-6 rounded-md mt-2`}><Text style={tw`text-blue-600 text-center text-xs mt-1`}>Drama</Text></View>
                                        <View style={tw`bg-red-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-red-600 text-xs text-center mt-1`}>Romance</Text></View>
                                        <View style={tw`bg-green-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-green-600 text-xs text-center mt-1`}>Adventure</Text></View>
                                    </View>
                                </View>

                            </View>

                        </View>

                        {/* Book 2 */}
                        <View style={tw`mt-4 ml-1`}>
                            <View style={tw`flex-row`}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/41SXcgKmEfL._SX328_BO1,204,203,200_.jpg' }} style={styles.bookImage} />
                                </TouchableOpacity>

                                <View style={tw`flex-col ml-1`}>
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-white font-bold text-base`}>The Self Help Book</Text>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                            resizeMode='contain'
                                            source={require('./assets/save.png')} />
                                    </View>
                                    <Text style={tw`text-gray-500 font-extrabold text-xs mt-1 `}>Jared GreyBeal</Text>

                                    <View style={tw`flex-row mt-4 mb-3`}>
                                        <View style={tw`flex-row mr-3`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/copy-2.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>120p</Text>
                                        </View>
                                        <View style={tw`flex-row`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/see.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>700k</Text>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row justify-between`}>
                                        <View style={tw`bg-indigo-800 mr-2 w-12 h-6 rounded-md mt-2`}><Text style={tw`text-blue-600 text-center text-xs mt-1`}>Drama</Text></View>
                                        <View style={tw`bg-red-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-red-600 text-xs text-center mt-1`}>Romance</Text></View>
                                        <View style={tw`bg-green-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-green-600 text-xs text-center mt-1`}>Adventure</Text></View>
                                    </View>
                                </View>

                            </View>

                        </View>
                        {/* Book 3 */}
                        <View style={tw`mt-4 ml-1`}>
                            <View style={tw`flex-row`}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/61yZA6ehN8L.jpg' }} style={styles.bookImage} />
                                </TouchableOpacity>

                                <View style={tw`flex-col ml-1`}>
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-white font-bold text-base`}>Mindset</Text>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                            resizeMode='contain'
                                            source={require('./assets/save.png')} />
                                    </View>
                                    <Text style={tw`text-gray-500 font-extrabold text-xs mt-1 `}>Dr. Carol S. Dweck</Text>

                                    <View style={tw`flex-row mt-4 mb-3`}>
                                        <View style={tw`flex-row mr-3`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/copy-2.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>500p</Text>
                                        </View>
                                        <View style={tw`flex-row`}>
                                            <Image
                                                style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                                resizeMode='contain'
                                                source={require('./assets/see.png')} />
                                            <Text style={tw`text-white mt-1 ml-1`}>9.7m</Text>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row justify-between mb-20`}>
                                        <View style={tw`bg-indigo-800 mr-2 w-12 h-6 rounded-md mt-2`}><Text style={tw`text-blue-600 text-center text-xs mt-1`}>Drama</Text></View>
                                        <View style={tw`bg-red-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-red-600 text-xs text-center mt-1`}>Romance</Text></View>
                                        <View style={tw`bg-green-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-green-600 text-xs text-center mt-1`}>Adventure</Text></View>
                                    </View>
                                </View>

                            </View>

                        </View>
                    </View>



                    : null}
                {ComingSoon ?

                    <View>
                        <View style={tw`mt-4 ml-1`}>
                            <View style={tw`flex-row`}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/81glE+dVktL.jpg' }} style={styles.bookImage} />
                                </TouchableOpacity>

                                <View style={tw`flex-col ml-1`}>
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-white font-bold text-base`}>Down and Out</Text>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                            resizeMode='contain'
                                            source={require('./assets/save.png')} />
                                    </View>
                                    <Text style={tw`text-white font-bold text-base`}>Down Under</Text>

                                    <Text style={tw`text-gray-500 font-extrabold text-xs mt-1 `}>Gernimo Stilton</Text>

                                    <View style={tw`flex-row justify-between`}>
                                        <View style={tw`bg-indigo-800 mr-2 w-12 h-6 rounded-md mt-2`}><Text style={tw`text-blue-600 text-center text-xs mt-1`}>Drama</Text></View>
                                        <View style={tw`bg-red-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-red-600 text-xs text-center mt-1`}>Romance</Text></View>
                                        <View style={tw`bg-green-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-green-600 text-xs text-center mt-1`}>Adventure</Text></View>
                                    </View>
                                </View>

                            </View>

                        </View>

                        {/* Book 2 */}
                        <View style={tw`mt-4 ml-1`}>
                            <View style={tw`flex-row`}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-july-2019/large/bbcjuly19verynice.jpg?1384968217' }} style={styles.bookImage} />
                                </TouchableOpacity>

                                <View style={tw`flex-col ml-1`}>
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-white font-bold text-base`}>Very Nice</Text>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                            resizeMode='contain'
                                            source={require('./assets/save.png')} />
                                    </View>
                                    <Text style={tw`text-gray-500 font-extrabold text-xs mt-1 `}>Mercy Dermansky</Text>

                                    <View style={tw`flex-row justify-between`}>
                                        <View style={tw`bg-indigo-800 mr-2 w-12 h-6 rounded-md mt-2`}><Text style={tw`text-blue-600 text-center text-xs mt-1`}>Drama</Text></View>
                                        <View style={tw`bg-red-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-red-600 text-xs text-center mt-1`}>Romance</Text></View>
                                        <View style={tw`bg-green-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-green-600 text-xs text-center mt-1`}>Adventure</Text></View>
                                    </View>
                                </View>

                            </View>

                        </View>
                        {/* Book 3 */}
                        <View style={tw`mt-4 ml-1`}>
                            <View style={tw`flex-row`}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://www.writersdigest.com/.image/t_share/MTcxMDY0NzcxMzIzNTY5NDEz/image-placeholder-title.jpg' }} style={styles.bookImage} />
                                </TouchableOpacity>

                                <View style={tw`flex-col ml-1`}>
                                    <View style={tw`flex-row justify-between`}>
                                        <Text style={tw`text-white font-bold text-base`}>Educated</Text>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: 'orange', marginTop: 4 }}
                                            resizeMode='contain'
                                            source={require('./assets/save.png')} />
                                    </View>
                                    <Text style={tw`text-gray-500 font-extrabold text-xs mt-1 `}>Tara WestOver</Text>

                                    <View style={tw`flex-row justify-between mb-32`}>
                                        <View style={tw`bg-indigo-800 mr-2 w-12 h-6 rounded-md mt-2`}><Text style={tw`text-blue-600 text-center text-xs mt-1`}>Drama</Text></View>
                                        <View style={tw`bg-red-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-red-600 text-xs text-center mt-1`}>Romance</Text></View>
                                        <View style={tw`bg-green-800 mr-2 w-16 h-6 rounded-md mt-2`}><Text style={tw`text-green-600 text-xs text-center mt-1`}>Adventure</Text></View>
                                    </View>
                                </View>

                            </View>

                        </View>


                    </View>



                    : null}


            </View >

        </View >

    )
}



const styles = StyleSheet.create({
    bookImage: {
        width: 120,
        height: 150,
        borderRadius: 10,
        resizeMode: 'contain'
    }

})
