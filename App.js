import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./midterm-screens/LoginScreen";
import ItemsScreen from "./midterm-screens/ItemsScreen";
import { store } from "./itemsSlice";
import { Provider } from "react-redux";
import ItemDetailScreen from "./midterm-screens/ItemDetailScreen";
import Fruits from "./midterm-screens/Fruits";

//import { store } from "./namesSlice";

const Tab = createBottomTabNavigator();


export default function App() {
    return(
    <Provider store={store}>
<NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Fruits" component={Fruits} />
     <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  </NavigationContainer>
    </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
