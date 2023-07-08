import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  tasks.length > 0 && (
    <div className="section__buttons">
      <button className="section__buttons">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="section__buttons"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  )
);

export default Buttons;