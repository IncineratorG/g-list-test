import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TextInput, Image} from 'react-native';

export default class ShoppingListScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="grey"
        />
      ),
      /* the rest of this config is unchanged */
    };
  };

  // static navigationOptions = {
  //   title: 'My Title',
  //   headerRight: () => (
  //     <Button
  //       onPress={() => alert('This is a button!')}
  //       title="Info"
  //       color="green"
  //     />
  //   ),
  // };

  render() {
    return (
      <View style={styles.mainContainerStyle}>
        <View style={styles.productsListWrapperStyle} />
        <View style={styles.inputSectionWrapperStyle}>
          <View style={styles.inputComponentsWrapperStyle}>
            <View style={styles.textInputWrapperStyle}>
              <TextInput
                placeholder={'Add item'}
                style={styles.textInputStyle}
              />
            </View>
            <View style={styles.inputButtonsWrapperStyle}>
              <View style={styles.editButtonWrapperStyle}>
                <Image
                  source={require('../assets/icons/edit.png')}
                  style={styles.editButtonImageStyle}
                />
              </View>
              <View style={styles.removeButtonWrapperStyle}>
                <Image
                  source={require('../assets/icons/delete.png')}
                  style={styles.removeButtonImageStyle}
                />
              </View>
              <View style={styles.okButtonWrapperStyle}>
                <Image
                  source={require('../assets/icons/checkmark.png')}
                  style={styles.okButtonImageStyle}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
  },

  productsListWrapperStyle: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },

  inputSectionWrapperStyle: {
    backgroundColor: '#26A9F7',
    height: 60,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  inputComponentsWrapperStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  },

  textInputWrapperStyle: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
  },

  textInputStyle: {
    height: 40,
    flex: 1,
    fontSize: 18,
    marginLeft: 8,
    marginRight: 8,
    paddingTop: 0,
    paddingBottom: 0,
  },

  inputButtonsWrapperStyle: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: 40,
    width: 120,
  },

  editButtonWrapperStyle: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    justifyContent: 'center',
  },

  editButtonImageStyle: {},

  removeButtonWrapperStyle: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    justifyContent: 'center',
  },

  removeButtonImageStyle: {},

  okButtonWrapperStyle: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    justifyContent: 'center',
  },

  okButtonImageStyle: {},
});
