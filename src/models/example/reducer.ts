import { ExampleState, ExampleAction, DELETE } from "./types";

const initialState: ExampleState = {
    list: [
        {
            id: 1,
            text: 'bat-man',
        },
        {
            id: 2,
            text: 'spider-man',
        },
        {
            id: 3,
            text: 'one-punch-man'
        },
    ],
}

export default function exampleReducer (state = initialState, action: ExampleAction): ExampleState {
    switch (action.type) {
        case DELETE:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
            }
        default:
            return state
    }
}