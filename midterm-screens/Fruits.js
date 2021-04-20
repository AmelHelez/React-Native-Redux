import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemDetailScreen from './ItemDetailScreen'
import ItemsScreen from './ItemsScreen'
import LoginScreen from './LoginScreen'

const Stack = createStackNavigator();

const Fruits = () => {
    return (
        <Stack.Navigator>
      <Stack.Screen name="Items" component={ItemsScreen} />
     <Stack.Screen name="Details" component={ItemDetailScreen} />
    </Stack.Navigator>
    )
}

export default Fruits

const styles = StyleSheet.create({})
