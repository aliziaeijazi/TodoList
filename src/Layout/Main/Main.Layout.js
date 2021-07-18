import {Component} from "react";
import {Header} from "../components";
import style from'./Main.module.css'
class Main extends Component {
		render() {
				return (
							<div className={style["main"]}>
									<Header/>
									<div className={style["content"]}>
											{this.props.children}
									</div>
							</div>
				);
		}
}

export {Main}