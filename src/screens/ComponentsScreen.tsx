import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Styles } from './styles'

const ComponentsScreen = (): JSX.Element => {
    const name = 'Ian'
    return (
        <View>
            <Text style={Styles.H0}>Getting started with React Native</Text>
            <Text style={Styles.H2}>My name is {name}</Text>
        </View>
    )
}

export { ComponentsScreen }