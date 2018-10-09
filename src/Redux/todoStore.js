import { createStore } from 'redux';

const defaultState = {
  todos: [
    {
      task: 'Initial todo in store'
    }
  ],
  checkedRoot: true,
  isTnCAccepted: true,
  extraData_todos: false,
}

function todoStore(state = defaultState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: state.todos.concat([{
          task: action.task
        }])
      });
    case 'DONE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((fTodo) => {
          return fTodo !== action.todo;
        })
      });
    default:
      return state;
  }
}

export default createStore(todoStore);