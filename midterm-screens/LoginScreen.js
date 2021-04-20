import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const LoginScreen = () => {
    return (
        <View>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
            <Button title="Login" />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
