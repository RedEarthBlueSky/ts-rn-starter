import React from 'react'
import { Text, StyleSheet } from 'react-native'

// interfaces are used to describe objects
type HomeScreenProps = {
    HomeScreenMessage: string,
}

//  the use of React.FC is now discouraged
const HomeScreen = ({HomeScreenMessage}: HomeScreenProps): JSX.Element => {
    return <Text style={styles.text}>HomeScreen</Text>
    // return <Text style={styles.text}>{HomeScreenMessage}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: "bold",
    },
})