import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./DogList.css";

function DogList({ dogs }) {
	const [dogList, updateList] = useState([]);
	const history = useHistory();

	const photoClick = (evt) => {
		const name = evt.target.alt;
		history.push(`/dogs/${name}`);
	};

	useEffect(() => {
		updateList(() => {
			return Object.keys(dogs).map((key, i) => (
				<div key={`DogListItem-${i}`} className={"dogDiv"}>
					<img
						src={dogs[key].src}
						className="dogPhoto"
						alt={dogs[key].name}
						onClick={photoClick}
					/>
				</div>
			));
		});
	}, [dogs]);

	return (
		<div>
			<h1>Dog</h1>
			<div id="dogWrap">{dogList}</div>
		</div>
	);
}

export default DogList;
