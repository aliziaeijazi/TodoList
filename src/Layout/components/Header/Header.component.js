import {Component} from "react";
import {Navbar , Search} from "./index";
import "./Header.module.css"

class Header extends Component {
		render() {
				return (
							<header>
									<Navbar/>
									<Search/>
							</header>
				);
		}
}
export {Header}