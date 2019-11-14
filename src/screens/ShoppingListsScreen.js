import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  Image,
} from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';

export default class ShoppingListsScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    const list = [
      // {name: 'First list', key: '1'},
      // {name: 'Second list', key: '2'},
      // {name: 'Third list', key: '3'},
      // {name: 'Fourth list', key: '4'},
      // {name: 'First list', key: '5'},
      // {name: 'Second list', key: '6'},
      // {name: 'Third list', key: '7'},
      // {name: 'Fourth list', key: '8'},
      // {name: 'First list', key: '9'},
      // {name: 'Second list', key: '10'},
      // {name: 'Third list', key: '11'},
      // {name: 'Fourth list', key: '12'},
      // {name: 'First list', key: '13'},
      // {name: 'Second list', key: '14'},
      // {name: 'Third list', key: '15'},
      // {name: 'Fourth list', key: '16'},
      // {name: 'First list', key: '17'},
      // {name: 'Second list', key: '18'},
      // {name: 'Third list', key: '19'},
      // {name: 'Fourth list', key: '20'},
    ];

    let shoppingListsComponent;

    if (list.length > 0) {
      shoppingListsComponent = (
        <FlatList
          data={list}
          renderItem={({item}) => <ShoppingListItem name={item.name} />}
          keyExtractor={item => item.key}
        />
      );
    } else {
      shoppingListsComponent = (
        <View style={styles.emptyListWrapperStyle}>
          <Image
            source={require('../assets/icons/shopping-cart.png')}
            style={styles.emptyListImageStyle}
          />
          <Text style={styles.emptyListTextStyle}>No shopping lists</Text>
        </View>
      );
    }

    return (
      <View style={styles.mainContainerStyle}>
        <View style={styles.listWrapperStyle}>{shoppingListsComponent}</View>
        <View elevation={1} style={styles.buttonWrapperStyle}>
          <TouchableHighlight
            underlayColor="white"
            onPress={() => {
              console.log('CLICKED');
              navigate('ShoppingList');
            }}>
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Add</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },

  listWrapperStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    margin: 4,
  },

  emptyListWrapperStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyListImageStyle: {
    width: 100,
    height: 100,
  },

  emptyListTextStyle: {
    fontSize: 16,
    color: 'black',
    marginTop: 4,
  },

  buttonWrapperStyle: {
    height: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'transparent',
  },

  buttonStyle: {
    height: 50,
    backgroundColor: '#26A9F7',
    borderWidth: 1,
    borderColor: '#26A9F7',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonTextStyle: {
    color: 'white',
    fontSize: 18,
  },
});
