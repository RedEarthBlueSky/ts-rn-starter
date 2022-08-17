import React from 'react'
import { Text, StyleSheet } from 'react-native'

const HomeScreen = (): JSX.Element => {
    return <Text style={styles.H1_BOLD}>Home Screen</Text>
}

const styles = StyleSheet.create({
    H1_BOLD: {
        fontSize: 30,
        fontWeight: "bold",
    },
})

export { HomeScreen }