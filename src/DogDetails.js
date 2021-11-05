// import react from "react";
// import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import "./DogDetails.css";

function DogDetails({ dog }) {
	const [dogInfo, updateInfo] = useState([]);
	useEffect(() => {
		updateInfo(() => {
			return dog.facts.map((fact, i) => <li key={`fact-${i}`}>{fact}</li>);
		});
	}, [dog]);
	return (
		<div>
			<img src={dog.src} alt={dog.name} />
			<h1>{dog.name}</h1>
			<h2>Age: {dog.age}</h2>
			<ul>{dogInfo}</ul>
		</div>
	);
}

export default DogDetails;
