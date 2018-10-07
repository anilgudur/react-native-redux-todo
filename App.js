/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert } from 'react-native';
import TaskList from './src/Task/TaskList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        }
      ],
      extraData_todos: false,
    }
  }

  onAdd() {
    console.log("On Add..");
    Alert.alert(
        'Remote Configure',
        'Accept Remote Configure from ?',
        [
          { text: 'Cancel', onPress: () => { }, style: 'cancel' },
          {
            text: 'OK', onPress: () => {
            }
          },
        ],
        { cancelable: false }
    );
  }

  render() {
    return (
      // <View style={styles.container}>
        <TaskList
          todos={this.state.todos}
          extraData_todos={this.state.extraData_todos}
          onAdd={this.onAdd.bind(this)}
        />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
