import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, ComponentsScreen, ListScreen } from './src/screens'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My Lekkle App',
    }
  }
)

export default createAppContainer(navigator)
