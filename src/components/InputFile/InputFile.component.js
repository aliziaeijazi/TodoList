import {Component} from "react";
import PropTypes from "prop-types";
import style from "./InputFile.module.css"
class InputFile extends Component {
		state = {ImageSrc: ""}
		handleChangeInputFile = (event) => {
				if (event.target.files[0]) {
						const reader = new FileReader()
						reader.onload = () => this.setState({ImageSrc: reader.result}, ()=>{this.props.onChangeInputFile(this.state.ImageSrc) ; this.setState({ImageSrc:""})})
						reader.readAsDataURL(event.target.files[0])
				}
				else this.props.onChangeInputFile(this.state.ImageSrc)
		}
		
		render() {
				const {label} = this.props
				return (<div className={style["input-file"]}>
									{{label} && <label className={style["lable"]}>{label}</label>}
									<input className={style["input"]} type="file" onChange={(e) => this.handleChangeInputFile(e)}
									       accept="image/png, image/jpeg"/></div>
				);
		}
}

InputFile.defaultProps = {
		label: ''
}

InputFile.propTypes = {
					label: PropTypes.string.isRequired,
					onChangeInputFile: PropTypes.func.isRequired
			}
export {InputFile}
