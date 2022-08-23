import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { 
  ComponentsScreen, 
  ColorScreen,
  CounterScreen,
  HomeScreen, 
  ImageScreen,
  ListScreen, 
} from './src/screens'

const navigator = createStackNavigator(
  {
    Colors: ColorScreen,
    Counter: CounterScreen,
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
