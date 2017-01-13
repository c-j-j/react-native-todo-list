import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoCallback: (item) => {
            dispatch(addTodo(item))
        }
    }
}

const ConnectedAddTodo = connect(null, mapDispatchToProps)(AddTodo)
export default ConnectedAddTodo