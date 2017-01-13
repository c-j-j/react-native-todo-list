import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TodoList from './containers/TodoList'
import AddTodo from './containers/AddTodo'
import todoApp from './reducers'


class SimpleTodo extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <AddTodo />
        <TodoList />
      </View>
    )
  }
}

const store = createStore(todoApp)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SimpleTodo />
      </Provider>
    )
  }
}