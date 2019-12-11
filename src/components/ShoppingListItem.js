import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, ToolbarAndroid} from 'react-native';

export default class ShoppingListItem extends React.Component {
  render() {
    const {name} = this.props;

    return (
      <View elevation={1} style={styles.mainContainerStyle}>
        <View style={styles.textWrapperStyle}>
          <Text style={styles.textStyle}>List item name</Text>
        </View>
        <View style={styles.iconsWrapperStyle}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    height: 60,
    backgroundColor: 'white',
    marginTop: 4,
    marginBottom: 14,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 4,
  },

  textWrapperStyle: {
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 18,
    marginLeft: 20,
    color: 'gray',
  },

  iconsWrapperStyle: {
    backgroundColor: 'transparent',
    height: 60,
    width: 50,
  },
});
