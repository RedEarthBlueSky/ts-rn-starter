import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { 
  HomeScreen, 
  ComponentsScreen, 
  ListScreen, 
  ImageScreen 
} from './src/screens'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen: ImageScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    }
  }
)

export default createAppContainer(navigator)
