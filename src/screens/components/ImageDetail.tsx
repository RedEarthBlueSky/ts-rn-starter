import React from 'react'
import { View, Text, Image } from 'react-native'
import { Styles } from '../styles'

type ImageDetailProps = {
  title: string
  imageSource: string
  score: number
}

const ImageDetail = (props: ImageDetailProps) => {
  return (
    <View>
      <Text style={Styles.H2_BOLD}>{props.title}</Text>
      <Image source={props.imageSource}/>
      <Text style={Styles.H3}>Image score: {props.score}</Text>
    </View>
  )
}

export { ImageDetail }