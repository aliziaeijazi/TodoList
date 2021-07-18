import {Component} from "react";
import {Button, InputField, InputFile} from "../../../../components";
import style from "./Form.module.css"
import TodoImage from "../../../../asset/images/Todo.jpg"
import Joi from "joi"
import {element} from "prop-types";
import {toast} from "react-toastify";

class Form extends Component {
		state = {
				title: '',
				describtion: '',
				ImageSrc: '',
		}
		joiValidation = Joi.object({
				title: Joi.string().required().min(4).max(20),
				describtion: Joi.string().required().min(5).max(50),
				ImageSrc: Joi.any()
		})
		handleSubmitForm = async (title, describetion, ImageSrc) => {
				try {
						await this.joiValidation.validateAsync(this.state , {abortEarly:false})
						if (ImageSrc)
								this.props.onChange(title, describetion, ImageSrc)
						else
								this.props.onChange(title, describetion, TodoImage)
						this.setState({
								title: '',
								describtion: '',
								ImageSrc: '',
						})
				} catch (error) {
						error.details.forEach(element=>{
								toast.error(<h3 style={{ fontSize:"medium"}} >{element.message}</h3>)
						})
				}
		}
		handleChangeInput = (key, value) => {
				this.setState({[key]: value})
		}
		
		
		render() {
				const {title, describtion, ImageSrc} = this.state
				return (
							<form className={style["flexform"]} onSubmit={(e) => {
									e.preventDefault();
									this.handleSubmitForm(title, describtion, ImageSrc)
							}}>
									<InputField label='Title' value={title} onChangeInput={(value) => this.handleChangeInput('title', value)}/>
									<InputField label='Describtion' value={describtion} onChangeInput={(value) => this.handleChangeInput('describtion', value)}/>
									<InputFile label={"Image"} onChangeInputFile={(value) => this.handleChangeInput("ImageSrc", value)}/>
									<Button inputStyle={{margin:"30px 0"}} type='submit'>Submit</Button>
							</form>
				)
		}
}

export {Form}
