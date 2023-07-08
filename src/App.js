import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";


const tasks = [
    { id: 1, content: "zrobić obiad", done: false },
    { id: 2, content: "przepisać notatki", done: false },
    { id: 3, content: "poćwiczyć na skrzypcach", done: true },
];

const HideDone = false;

function App() {
    return (
        <Container>
            <Header title="Lista zadań" />

            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />

            <Section
                title="Lista zadań"
                body={<Tasks tasks={tasks} HideDone={HideDone} />}
                extraHeaderContent={<Buttons tasks={tasks} HideDone={HideDone} />}
            />
        </Container>
    );
}

export default App;
