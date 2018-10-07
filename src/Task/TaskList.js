import React, {Component } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight, Text } from "react-native";
import PropTypes from 'prop-types';
import TaskRow from './TaskRow';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  }
});

export default class TaskList extends Component {

  constructor(props) {
    super(props);
  }

  _keyExtractor_taskRow = (item, index) => index.toString();
  _renderItem_taskRow = ({ item, index }) => (
    <TaskRow
      id={index}
      index={index}
      item={item}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todos}
          extraData={this.props.extraData_todos}
          keyExtractor={this._keyExtractor_taskRow}
          renderItem={this._renderItem_taskRow}
        />

        <TouchableHighlight
          onPress={this.props.onAdd}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add One</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

// You can declare that a prop is a specific JS type. 
TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAdd: PropTypes.func.isRequired,
};

