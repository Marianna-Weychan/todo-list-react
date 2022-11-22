import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__item${task.done && hideDone
                    ? " tasks__item--hidden"
                    : ""}`
                }>
                <button className="tasks__button tasks__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={
                    `tasks${task.done ? " tasks__done" : ""}`
                }>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--delete">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);
export default Tasks;