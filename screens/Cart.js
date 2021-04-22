import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Cart = ({route}) => {
    const cart = useSelector(state => state.items.cart);
    //const cartDetail = cart.filter((p) => p.id === route.params.itemId);
    console.log(cart);

    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30, textAlign: "center"}}>My Cart:</Text>
            {cart.map((p) => (
                <View key={p.id} style={styles.cart}>
            <Text style={{fontSize: 20}}>Name: {p.name}</Text>
            <Text style={{fontSize: 20}}>Color: {p.color}</Text>
                    </View>
            ))}
            
            </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    cart: {
        borderWidth: 1,
        borderRadius: 7,
        padding: 12,
        margin: 12,
    }
})
