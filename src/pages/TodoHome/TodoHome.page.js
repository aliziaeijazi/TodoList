import {Component} from "react";
import {Form} from "./components/Form/Form.component";
import 'react-toastify/dist/ReactToastify.css';
import "./TodoHome.module.css"
import * as todoAPIs from "../../api/todo.api";

class TodoHome extends Component {
		
		handleChangeForm = (title, describtion , ImageSrc) => {
				(title && describtion && todoAPIs.addTodo({title:title, describtion: describtion, ImageSrc:ImageSrc}))
		}
		render() {
				return (
							< >
									<Form onChange={this.handleChangeForm}/>
							</>
				)
		}
}
export {TodoHome}