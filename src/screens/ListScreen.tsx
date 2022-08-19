import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Styles } from './styles'
import { Friends } from './data'

const ListScreen = () => {
  console.log('I am testing testing!')
  return (
    <View>
      <Text style={Styles.H1_BOLD}>List Screen</Text>
      <FlatList 
        // horizontal - default is vertical
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={Friends} 
        renderItem={({ item, index }) => {
          return ( 
            <Text style={Styles.MarginL}>
              {index}: {item.name} - Age: {item.age}.
            </Text> 
          )
        }}
        keyExtractor={friend => friend.name}
      />
    </View>
  )
}

export { ListScreen }

const styles = StyleSheet.create({})