import {Component} from "react";
import './Search.module.js.css'
class Search extends Component {
		render() {
				return (
							<form className="search">
									<input  placeholder={"Serching ...."}/>
									<button >Search</button>
							</form>
				);
		}
}

export {Search}
