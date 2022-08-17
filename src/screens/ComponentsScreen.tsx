import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentsScreen = (): JSX.Element => {
    const name = 'Ian'
    return (
        <View>
            <Text style={styles.h0}>Getting started with React Native</Text>
            <Text style={styles.h2}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  h0: {
    fontSize: 40,
  },
  h2: {
    fontSize: 26,
  },
  bold: {
    fontWeight: 'bold',
  },
})

export { ComponentsScreen }