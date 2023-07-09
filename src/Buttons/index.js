import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  tasks.length > 0 && (
    <div className="section__buttons">
      <button
        onClick={toggleHideDone}
        className="section__buttons">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        onClick={setAllDone}
        className="section__buttons"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  )
);

export default Buttons;