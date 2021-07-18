import {createStore} from "redux";
import {TodoReducer} from "./reducer/todo.reducer";
const appReducer = (state , action) => TodoReducer(state,action)

const store = createStore(appReducer)
export {store}