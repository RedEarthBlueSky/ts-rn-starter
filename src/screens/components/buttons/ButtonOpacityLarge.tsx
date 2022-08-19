import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from '../../styles'

type ButtonProps = {
  onPress: () => void
  title: string
}

const ButtonOpacityLarge = (props: ButtonProps): JSX.Element => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={Styles.ButtonMediumShadow}
      >
        <Text style={Styles.H3}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export { ButtonOpacityLarge }

const styles = StyleSheet.create({})