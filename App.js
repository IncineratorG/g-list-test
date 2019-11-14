import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TestScreen from './src/screens/TestScreen';
import ShoppingListsScreen from './src/screens/ShoppingListsScreen';
import ShoppingListScreen from './src/screens/ShoppingListScreen';
import ModalScreen from './src/screens/ModalScreen';

const navigator = createStackNavigator(
  {
    Test: TestScreen,
    ShoppingLists: ShoppingListsScreen,
    ShoppingList: ShoppingListScreen,
  },
  {
    initialRouteName: 'ShoppingLists',
    // defaultNavigationOptions: {
    //   title: 'App',
    // },
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: navigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const App = createAppContainer(RootStack);

export default App;
