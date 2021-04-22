import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Cart from './Cart'
import ItemDetailScreen from './ItemDetailScreen'
import ItemsScreen from './ItemsScreen'

const Stack = createStackNavigator();

const Fruits = () => {
    return (
        <Stack.Navigator>
      <Stack.Screen name="Items" component={ItemsScreen} />
     <Stack.Screen name="Details" component={ItemDetailScreen} />
     <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
    )
}

export default Fruits

const styles = StyleSheet.create({})
