import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { addItem, addToCart, clearCart } from "../itemsSlice";

const Tab = createBottomTabNavigator();


const ItemsScreen = ({navigation}) => {
    const fruits = useSelector(state => state.items.fruits);
    const cart = useSelector(state => state.items.cart);

    const dispatch = useDispatch();
    return (
        <ScrollView style={styles.container}>
            {fruits.map((item) => (
                <View key={item.id} style={styles.fruits}>
                    <Text style={styles.fruitName}>{item.name}</Text>
                    <Button title={"Click to view detais"}
                    onPress={() => navigation.navigate("Details", {itemId: item.id})} />
                    <View style={{marginBottom: 10}}></View>
                    <Button title={"Add to cart"} 
                    onPress={() => dispatch(addToCart({itemId: item.id}))} />
                    <View style={{marginBottom: 10}}></View>
                </View>
            ))}
             <View style={styles.margin}></View>
            
             <Button title="View my cart"
             onPress={() => navigation.navigate("Cart", {itemId: cart.id})} />
             <View style={{marginBottom: 15}}></View>
            <Button title="Add a new fruit"
            onPress={() => (dispatch(addItem({id: fruits.length + 1, name: "orange", color: "orange"})))}
             />
            <View style={{marginBottom: 15}}></View>
             <Button title="Clear cart" color="red"
             onPress={() => dispatch(clearCart(cart))} />
        </ScrollView>
    )
}

export default ItemsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        marginHorizontal: 20,
    },
    fruits: {
        margin: 7,
        padding: 7,
        borderWidth: 1,
    },
    fruitName: {
        fontSize: 30,
        marginBottom: 15,
        textAlign: "center",
    },
    margin: {
        marginTop: 40
    }
})
