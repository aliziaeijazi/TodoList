const initialState = {
		todoList:[1 , 2, 3 ],
		todoItem:{}
}
const TodoReducer = (state = initialState  , action) =>
{
		switch (action.type){
				case 'TODO_SET_LIST':
						return {...state,todoList: action.date}
				case 'TODO_SET_ITEM':
						return{...state,todoItem:action.data}
				default:
							return state
		}
}
export {TodoReducer}