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
import RootNavigation from './src/Navigation/RootNavigation';
import store from './src/Redux/todoStore';

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

    // this.state = {
    //   checkedRoot: true,
    //   isTnCAccepted: true,

    //   todos: [
    //     {
    //       task: 'Learn React Native'
    //     },
    //     {
    //       task: 'Learn Redux'
    //     }
    //   ],
    //   extraData_todos: false,
    // }
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  onAddOpen(navigation) {
    console.log("On Add..");
    console.log("this.props:: ", this.props);
    console.log('navigation: ', navigation);
    navigation.navigate('AddTaskRoute');
    // Alert.alert(
    //     'Remote Configure',
    //     'Accept Remote Configure from ?',
    //     [
    //       { text: 'Cancel', onPress: () => { }, style: 'cancel' },
    //       {
    //         text: 'OK', onPress: () => {
    //         }
    //       },
    //     ],
    //     { cancelable: false }
    // );
  }

  onAddPress(navigation, task) {
    // let todos = this.state.todos;
    // todos.push({task: task});
    // this.setState({
    //   todos: todos
    // });
    store.dispatch({
      type: 'ADD_TODO',
      task: task
    });
    console.log('A task was added: ', task);
    navigation.goBack();
  }

  onCancelPress(navigation) {
    navigation.goBack();
  }

  onDone(todo) {
    console.log("onDone pressed: ", todo);
    // let filteredTodos = this.state.todos.filter((fTodo) => {
    //   return fTodo !== todo; 
    // });
    // this.setState({ todos: filteredTodos });
    store.dispatch({
      type: 'DONE_TODO',
      todo: todo,
    });
  }

  onToggle() {
    store.dispatch({
      type: 'TOGGLE_STATE',
    });
  }

  render() {
    return (
      // <View style={styles.container}>
        <RootNavigation
          checkedRoot={this.state.checkedRoot}
          isTnCAccepted={this.state.isTnCAccepted}

          todos={this.state.todos}
          extraData_todos={this.state.extraData_todos}
          onAddOpen={this.onAddOpen.bind(this)}
          onAddPress={this.onAddPress.bind(this)}
          onCancelPress={this.onCancelPress.bind(this)}
          onDone={this.onDone.bind(this)}
          filter={this.state.filter}
          onToggle={this.onToggle.bind(this)}
        />
        // <TaskList
        //   todos={this.state.todos}
        //   extraData_todos={this.state.extraData_todos}
        //   onAddOpen={this.onAddOpen.bind(this)}
        // />
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
