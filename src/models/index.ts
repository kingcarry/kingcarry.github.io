import exampleReducer from "./example/reducer";
import { combineReducers, createStore } from "redux"

const rootReducer = combineReducers({
    example: exampleReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
    const store = createStore(rootReducer)
    return store
}