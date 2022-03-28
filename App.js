import * as React from "react";
import { View, Text } from "react-native";
import BookScreen from "./BookScreen";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from "./BottomTab";
import TGB from "./TGB";
import Login from "./Login";
import Signup from "./Signup";
import Starter from "./Starter";
import First from "./First";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Starter"
          component={Starter}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="First"
          component={First}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BookScreen"
          component={BookScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TGB"
          component={TGB}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
