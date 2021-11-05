import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
	const [listItems, updateItems] = useState([]);
	useEffect(() => {
		const list = Object.keys(dogs).map((key) => dogs[key].name);
		updateItems(() => {
			return list.map((item, i) => (
				<li key={`NavListItem-${i}`}>
					<Link to={`/dogs/${item}`}>{item}</Link>
				</li>
			));
		});
	}, [dogs]);

	return <ul id="navBar">{listItems}</ul>;
}

export default Nav;
