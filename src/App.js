import { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

function App() {
	const [hideDone, setHideDone] = useState(false);
	const [tasks, setTasks] = useState([
		{ id: 1, content: "zrobić obiad", done: false },
		{ id: 2, content: "przepisać notatki", done: false },
		{ id: 3, content: "poćwiczyć na skrzypcach", done: true },
	]);

	const toggleHideDone = () => {
		setHideDone(hideDone => !hideDone);
	};

	const removeTask = (id) => {
		setTasks(tasks => tasks.filter(task => task.id !== id));
	};

	return (
		<Container>
			<Header title="Lista zadań" />

			<Section
				title="Dodaj nowe zadanie"
				body={<Form />}
			/>

			<Section
				title="Lista zadań"
				body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
				extraHeaderContent={
					<Buttons
						tasks={tasks}
						hideDone={hideDone}
						toggleHideDone={toggleHideDone}
					/>}
			/>
		</Container>
	);
}

export default App;
