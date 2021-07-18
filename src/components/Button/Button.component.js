import {Component} from "react";
import style from "./Button.module.css"

class Button extends Component {
		handleClick = () => {
				const {onClick} = this.props
				typeof onClick === 'function' && onClick()
		}
		render() {
				const {type = 'button'} = this.props
				return (
							<button className={style['btn']} style={this.props.inputStyle} type={type} onClick={this.handleClick}>
									{this.props.children}
							</button>
				)
		}
}
export {Button}