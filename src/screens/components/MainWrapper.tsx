import { View, Text, StyleSheet } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { FlipInEasyX } from 'react-native-reanimated'

type MainWrapperProps = { children: ReactNode }

const MainWrapper: FC<MainWrapperProps> = ({children}) => {
  return (
    <View style={styles.mainWrapperStyles}>
      {children}
    </View>
  )
}

export { MainWrapper }

const styles = StyleSheet.create({
    mainWrapperStyles: {
        backgroundColor: '#fff',  // base
        height: '100%',
        padding: 10,
        width: '100%',
    },
})