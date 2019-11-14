import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TestScreen = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.listWrapperStyle} />
      <View style={styles.buttonWrapperStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  listWrapperStyle: {
    backgroundColor: 'grey',
    flex: 1,
    margin: 4,
  },

  listStyle: {
    backgroundColor: 'blue',
    flex: 1,
  },

  buttonWrapperStyle: {
    backgroundColor: '#F4511E',
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    margin: 8,
  },

  buttonStyle: {
    // height: 50,
    // backgroundColor: 'red',
    // margin: 4,
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // flexDirection: 'row',
  },
});

// const TestScreen = () => {
//   return (
//     <View style={styles.rootViewStyle}>
//       <View style={styles.leftSquareStyle} />
//       <View style={styles.centerSquareStyle} />
//       <View style={styles.rightSquareStyle} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   rootViewStyle: {
//     height: 200,
//     borderWidth: 1,
//     borderColor: 'grey',
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin: 20,
//   },
//   leftSquareStyle: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'red',
//   },
//   centerSquareStyle: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'green',
//     alignSelf: 'flex-end',
//   },
//   rightSquareStyle: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'purple',
//   },
// });

export default TestScreen;
