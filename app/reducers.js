const defaultState = [
    'Buy Milk',
    'Exercise tonight',
]

export default function todoApp(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [action.text].concat(state)
        default:
            return state
    }
}