import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { addItem, removeItem } from "../itemsSlice";

const Tab = createBottomTabNavigator();


const ItemsScreen = ({navigation}) => {
    const fruits = useSelector(state => state.items.fruits);
    const dispatch = useDispatch();
    console.log(fruits);
    return (
        <ScrollView style={styles.container}>
            {fruits.map((item) => (
                <View key={item.id} style={styles.fruits}>
                    <Text style={styles.fruitName}>{item.name}</Text>
                    <Button title={"Click to view detais"}
                    onPress={() => navigation.navigate("Details", {itemId: item.id})} />
                    <Button title={"Delete fruit"}
                    onPress={() => dispatch(removeItem({itemId: item.id}))} />
                </View>
            ))}
             <View style={styles.margin}></View>
            <Button title="Add a new fruit"
            onPress={() => (dispatch(addItem({id: fruits.length + 1, name: "orange", color: "orange"})))}
             />
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
        padding: 5,
        borderWidth: 1,
    },
    fruitName: {
        fontSize: 30,
    },
    margin: {
        marginTop: 40
    }
})
