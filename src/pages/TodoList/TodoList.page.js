import {Component, useReducer} from "react";
import * as todoAPIs from "../../api/todo.api";
import {toast} from "react-toastify";
import TodoContext from "../../context/Todo.context";
import {ListItem} from "./components";
import style from "./TodoList.module.css"
import {deleteTodo} from "../../api/todo.api";
class TodoList extends Component {
		static contextType = TodoContext
		state = {
				users: []
		}
		async componentDidMount() {
				try {
						const users = await todoAPIs.feachTodos()
						users && this.context.setTodo(users)
				} catch (error) {
				}
		}
		handleDelete = async (id)=>
		{
				try{
						await deleteTodo(id)
						const users = await todoAPIs.feachTodos()
						users && this.context.setTodo(users)
				}
				catch (e){
				}
		}

		render() {
				const {users} = this.context
				return (
							<div className={style.flex}>
									<h2 className={style.title}>TodoList</h2>
									<ul className={style.flex}>{
											users && users.map((item) =><ListItem key={item.id} {...item} onClick={this.handleDelete} /> )
									}</ul>
							</div>
				);
		}
}

export {TodoList}