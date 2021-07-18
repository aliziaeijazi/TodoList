import {Component} from "react";
import PropTypes from 'prop-types'
import style from "./InputField.module.css"
class InputField extends Component {
		state = {
				value: ""
		}
		
		componentDidMount() {
				this.setState({value: this.props.value})
		}
		
		shouldComponentUpdate(nextProps, nextState) {
				if (nextProps.value !== this.props.value) {
						this.setState({value: nextProps.value})
				}
				return true
		}
		
		handleInputChange = async ({target}) => {
				await this.setState({value: target.value})
				this.props.onChangeInput(this.state.value)
		}
		
		
		render() {
				const {label } = this.props
				const {value} = this.state
				return (
							<div className={style["input-feild"]} >
									{{label} && <label className={style["lable-input"]}>{label}</label>}
									<input className={style['text-input']} type='text' value={value} onChange={this.handleInputChange}/>
							</div>
				)
		}
}

InputField.defaultProps = {
		value: '',
		label: ''
}
InputField.propTypes = {
		value: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		onChangeInput: PropTypes.func.isRequired
}

export {InputField}
