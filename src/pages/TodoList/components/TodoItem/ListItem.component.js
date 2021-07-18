import style from "./ListItem.module.css"
import {Button} from "../../../../components";


const ListItem = (props)=>
{
		const { title , describtion,ImageSrc} = props
		return (
					<div className={style.item}>
							<img className={style.img} src={ImageSrc}/>
							<h3 className={style.title}>{title}</h3>
							<p  className={style.describtion}>{describtion}</p>
							<Button onClick={(id= props.id)=>props.onClick(id)}>Delete</Button>
					</div>
		)
}
export {ListItem}