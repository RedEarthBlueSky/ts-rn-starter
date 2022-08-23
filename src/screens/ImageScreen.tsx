import { 
  Text, 
  ScrollView, 
  SafeAreaView, 
  StatusBar,
  StyleSheet
} from 'react-native'
import React from 'react'
import { ImageDetail } from './components'
import { Styles } from './styles'
import { ForestImage, BeachImage, MountainImage, LakeImage } from '../assets'

const data = [
  {title: 'Forest View', imageSource: ForestImage, score: 5},
  {title: 'Beach View', imageSource: BeachImage, score: 4},
  {title: 'Mountain Side', imageSource: MountainImage, score: 4},
  {title: 'Lake View', imageSource: LakeImage, score: 6}
]

const ImageScreen = () => {
  console.log('status bar', StatusBar.currentHeight)
  return (
      <SafeAreaView style={styles.container}>
        <Text style={Styles.H1_BOLD}>ImageScreen</Text>
        <ScrollView style={styles.scrollView}>
          {
            data.map((item, index) => {
              return (
                <ImageDetail 
                  key={index}
                  title={item.title} 
                  imageSource={item.imageSource}
                  score={item.score}
                />
              )
            })
          }
        </ScrollView>
      </SafeAreaView>
  )
}

export { ImageScreen }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'wheat',
    flex: 1,
    padding: StatusBar.currentHeight,
    width: '100%',
    alignItems: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});