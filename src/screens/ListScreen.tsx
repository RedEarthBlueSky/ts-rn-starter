import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Friends = [
    {name: 'Friend n0'},
    {name: 'Friend n1'},
    {name: 'Friend n2'},
    {name: 'Friend n3'},
    {name: 'Friend n4'},
    {name: 'Friend n5'},
    {name: 'Friend n6'},
    {name: 'Friend n7'},
    {name: 'Friend n8'},
    {name: 'Friend n9'},
    {name: 'Friend n10'},

]

const ListScreen = () => {
  return (
    <View>
      <Text>ListScreen</Text>
      <FlatList 
        data={Friends} 
        renderItem={(element) => {
        // element === { item: {name: 'value'}, index: 0}
        }}/>
    </View>
  )
}

export { ListScreen }

const styles = StyleSheet.create({})