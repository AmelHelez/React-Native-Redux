import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

const ItemDetailScreen = ({navigation, route}) => {
    const item = useSelector(state => state.items.fruits);
    const itemDetail = item.find((fruit) => fruit.id === route.params.itemId);


      useLayoutEffect(() => {
        navigation.setOptions({
            title: itemDetail.name,
            headerBackTitle: "Items",
        })
      }, [navigation]);

    console.log(itemDetail);
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {itemDetail.id} </Text>
            <Text style={styles.text}> {itemDetail.name} </Text>
            <Text style={{color: itemDetail.color, fontSize: 25}} > {itemDetail.color}</Text>
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
