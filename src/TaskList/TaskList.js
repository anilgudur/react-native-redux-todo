import React, {Component } from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  statusBarUnderlay: {
    //height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default class TaskList extends Component {

  constructor(props) {
    super(props);
  }

  _keyExtractor_schedule_item = (item, index) => index.toString();
  _renderItem_schedule_item = ({ item, index }) => (
    <ScheduleItemRow
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
          keyExtractor={this._keyExtractor_schedule_item}
          renderItem={this._renderItem_schedule_item}
        />
      </View>
    )
  }
}

// You can declare that a prop is a specific JS type. 
TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class ScheduleItemRow extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      const item = this.props.item;

      return (
        <Text>{item.tasks}</Text>
      )
  }
}