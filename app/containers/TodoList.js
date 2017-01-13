import { connect } from 'react-redux'

import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  return {
    items: state
  }
}

const ConnectedTodoList = connect(mapStateToProps)(TodoList)
export default ConnectedTodoList