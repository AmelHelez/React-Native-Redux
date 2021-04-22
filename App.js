import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import { store } from "./itemsSlice";
import { Provider } from "react-redux";
import Fruits from "./screens/Fruits";


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
