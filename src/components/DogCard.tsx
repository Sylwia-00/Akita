import type { Dog } from "../Dogs";

interface DogCardProps {
	dog: Dog;
}

function DogCard({ dog }: DogCardProps) {
	return (
		<>
			<h1> Nom: {dog.name}</h1>
			<img src={dog.picture} alt={dog.name} />
			<ul>
				<li>Race: {dog.race}</li>
				<li>Age: {dog.age}</li>
				<li>Sexe: {dog.gender}</li>
				<li>Stérilisé: {dog.sterilized ? "Oui" : "Non"}</li>

				<li>Description: {dog.description}</li>
			</ul>
		</>
	);
}

export default DogCard;
