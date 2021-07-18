import React from "react";
import {Component} from "react";
import * as todoAPIs from "../api/todo.api";

const TodoContext = React.createContext()

class TodoProvider extends Component {
		state = {
				users: []
		}
		
		// async componentDidMount() {
		// 		try {
		// 				const users = await todoAPIs.feachTodos()
		// 				this.setState({users: users})
		// 		} catch (error) {
		// 		}
		// }
	
		
		addTodo = (value) => {
				this.setState({users: [...this.state.users,value]})
		}
		setTodo = (values) => {
				this.setState({users: values})
		}
		
		render() {
				const {users} = this.state
				const contextValue = {users, addTodo: this.addTodo, setTodo: this.setTodo}
				return (
							<TodoContext.Provider value={contextValue}>
									{this.props.children}
							</TodoContext.Provider>
				);
		}
}

export {TodoProvider, TodoContext as default}