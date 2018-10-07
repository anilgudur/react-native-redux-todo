import React, {Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  label: {
    fontSize: 20,
    fontWeight: '300'
  }
});

export default class TaskRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{item.task}</Text>
      </View>
    )
  }
}

TaskRow.propTypes = {
  item: PropTypes.shape({
    task: PropTypes.string.isRequired
  }).isRequired
}