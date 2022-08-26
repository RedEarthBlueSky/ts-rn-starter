import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { 
  ComponentsScreen, 
  ColorScreen,
  CounterScreen,
  HomeScreen, 
  ImageScreen,
  ListScreen, 
  SquareScreen,
  TextScreen,
} from './src/screens'

const navigator = createStackNavigator(
  {
    Colors: ColorScreen,
    Counter: CounterScreen,
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    Squares: SquareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    }
  }
)

export default createAppContainer(navigator)
