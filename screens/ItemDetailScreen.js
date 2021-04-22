import React, { useLayoutEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

const ItemDetailScreen = ({navigation, route}) => {
    const item = useSelector(state => state.items.fruits);
    const itemId = item.find((fruit) => fruit.id === route.params.itemId);

      useLayoutEffect(() => {
        navigation.setOptions({
            title: itemId.name,
            headerBackTitle: "Items",
        })
      }, [navigation]);

    console.log(itemId);
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Item ID: {itemId.id} </Text>
            <Text style={styles.text}> Item Name: {itemId.name} </Text>
            <Text style={{ fontSize: 25}} > Item color: {itemId.color}</Text>
            <View style={{marginTop: 14}}></View>
            <Button title="Go back" color="black"
            onPress={() => navigation.goBack()} />
        </View>
    );
}

export default ItemDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    text: {
     fontSize: 25,
     padding: 5,
    },
})
