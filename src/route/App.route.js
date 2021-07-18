import {Component} from "react";
import {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";
import {TodoHome, TodoList} from "../pages/index";
import {Main} from "../Layout";
import {PageTransition} from '@steveeeie/react-page-transition';

class AppRoute extends Component {
		render() {
				return (
							<BrowserRouter>
									<Route render={({location}) => {
											return (
														<PageTransition preset="fadeFromRight" transitionKey={location.pathname}>
																<Switch location={location}>
																		<Route path="/" exact>
																				<Main>
																						<TodoHome/>
																				</Main>
																		</Route>
																		<Route path="/list" exact>
																				<Main>
																						<TodoList/>
																				</Main>
																		</Route>
																		<Route path="/about">
																				<Main>
																						<h1>This project was made by Ali Ziaei Jazi</h1>
																						<a href="https://github.com/aliziaeijazi">Github</a>
																				</Main>
																		</Route>
																		<Route path="/login">
																				<Main>
																						<h1>login Page</h1>
																				</Main>
																		</Route>
																		<Redirect from="/" to="/home" exact/>
																		<Route>
																				<h1>404 : Not Found Page</h1>
																		</Route>
																</Switch>
														</PageTransition>)
									}}/>
							</BrowserRouter>
				);
		}
}

export {AppRoute}