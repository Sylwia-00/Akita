import type { Dog } from "../Dogs";
import DogCard from "./DogCard";

interface DogsListProps {
	dogs: Dog[];
}

function DogsList({ dogs }: DogsListProps) {
	return (
		<div>
			{dogs.map((dog: Dog) => (
				<DogCard key={dog.id} dog={dog} />
			))}
		</div>
	);
}

export default DogsList;
