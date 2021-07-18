import logo from './logo.svg';
import './App.css';
import {AppRoute} from "./route/App.route";
import {ToastContainer} from "react-toastify";
import {TodoProvider} from "./context/Todo.context";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import React from "react";

function App() {
		return (
							<TodoProvider>
									<Provider store={store}>
											<AppRoute/>
									</Provider>
									<ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false}
									                closeOnClick
									                rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
							</TodoProvider>
						
		);
}
export default App;

