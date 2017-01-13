import React from 'react'
import { TextInput } from 'react-native'

export default class AddTodo extends React.Component {
    constructor() {
        super()
        this.state = { text: '' }
    }

    render() {
        return (
            <TextInput placeholder="Add Todo"
                onChangeText={(text) => this.setState({ text })}
                onSubmitEditing={this.submit.bind(this)}
                value={this.state.text}
                />
        )
    }

    submit() {
        this.setState({ text: '' })
        this.props.addTodoCallback(this.state.text)
    }
}