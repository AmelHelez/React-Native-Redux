import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <TextInput placeholder="Email"
            type="email" value={email}
            onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder="Password" secureTextEntry={true}
            type="password" value={password}
            onChangeText={(text) => setPassword(text)} />
            <Button title="Login" onPress={() => navigation.navigate("Items")}/>
            <Text>{email} {password}</Text> 
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})
