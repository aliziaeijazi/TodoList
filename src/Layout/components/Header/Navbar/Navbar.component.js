import {Component} from "react";
import style from './Navbar.module.css'
import {Link} from "react-router-dom";
class Navbar extends Component {
		render() {
				return (
							<nav className={style["nav"]}>
									<ul>
											<li>
													<a>Todo</a>
											</li>
											<li>
													<Link to='/'>Home</Link>
											</li>
											<li>
													<Link to='/list'>List</Link>
											</li>
											<li>
													<Link to='/about'>About Me</Link>
											</li>
									</ul>
							</nav>
				);
		}
}
export {Navbar}