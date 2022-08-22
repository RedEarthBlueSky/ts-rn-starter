import { Text, View } from 'react-native'
import React from 'react'
import { ImageDetail } from './components'
import { Styles } from './styles'
import { ForestImage, BeachImage, MountainImage, LakeImage } from '../assets'

const data = [
  {title: 'Forest', imageSource: ForestImage, score: 5},
  {title: 'Beach', imageSource: BeachImage, score: 4},
  {title: 'Mountain', imageSource: MountainImage, score: 4},
  {title: 'Lake', imageSource: LakeImage, score: 6}
]

const ImageScreen = () => {
  return (
    <View>
      <Text style={Styles.H1_BOLD}>ImageScreen</Text>
      {
        data.map((item) => {
          return <ImageDetail 
            title={item.title} 
            imageSource={item.imageSource}
            score={item.score}
          />
        })
      }
    </View>
  )
}

export { ImageScreen }