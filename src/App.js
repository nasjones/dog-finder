import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav";
import "./App.css";

function App({ dogs }) {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/">
					<Nav dogs={dogs} />
				</Route>
				<Switch>
					<Route exact path="/dogs">
						<DogList dogs={dogs} />
					</Route>
					<Route
						exact
						path="/dogs/:name"
						render={({ match }) => {
							return (
								<DogDetails
									dog={dogs.find((dog) => dog.name === match.params.name)}
								/>
							);
						}}
					/>
					{/* <DogDetails dog={dogs[0]} /> */}
					{/* </Route> */}
					<Redirect to="/dogs" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
App.defaultProps = {
	dogs: [
		{
			name: "Whiskey",
			age: 5,
			src: "/whiskey.jpg",
			facts: [
				"Whiskey loves eating popcorn.",
				"Whiskey is a terrible guard dog.",
				"Whiskey wants to cuddle with you!",
			],
		},
		{
			name: "Duke",
			age: 3,
			src: "/duke.jpg",
			facts: [
				"Duke believes that ball is life.",
				"Duke likes snow.",
				"Duke enjoys pawing other dogs.",
			],
		},
		{
			name: "Perry",
			age: 4,
			src: "/perry.jpg",
			facts: [
				"Perry loves all humans.",
				"Perry demolishes all snacks.",
				"Perry hates the rain.",
			],
		},
		{
			name: "Tubby",
			age: 4,
			src: "/tubby.jpg",
			facts: [
				"Tubby is really stupid.",
				"Tubby does not like walks.",
				"Angelina used to hate Tubby, but claims not to anymore.",
			],
		},
	],
};

export default App;
