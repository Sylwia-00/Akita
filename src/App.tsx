import "./App.css";
import DogsList from "./components/DogsList";
import { dogsList } from "./Dogs";

function App() {
	return (
		<div>
			<DogsList dogs={dogsList} />
		</div>
	);
}

export default App;
