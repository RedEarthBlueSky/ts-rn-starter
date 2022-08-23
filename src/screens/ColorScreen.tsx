import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState} from 'react'
import { Styles } from './styles'
import { MainWrapper, ButtonOpacityLarge } from './components'
import { Colors } from 'react-native/Libraries/NewAppScreen';

type colorProps = `rgb(${number}, ${number}, ${number})`;

const ColorScreen = () => {
  const [colors, setColors] = useState([])
  console.log(colors)
  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>Color Screen</Text>
      <ButtonOpacityLarge
        onPress={() => {setColors([...colors, randomRgb()])}}
        title='Add a Color'
      />
      <FlatList 
        data={colors}
        renderItem={({ item, index }) => {
          return <View 
            key={index}
            style={{
              height: 100, 
              width: 100, 
              backgroundColor:item,
            }}/>
        }}
      />
    </MainWrapper>
  )
}

export { ColorScreen }

const styles = StyleSheet.create({
  colorBlockStyle: {
    height: 100, 
    width: 100, 
    alignSelf: 'center',
    marginTop: 10,
  },
})

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}