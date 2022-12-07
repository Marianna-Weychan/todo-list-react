import { TasksList, Item, Content, Button } from "./styled";


const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TasksList>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button
                    remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </TasksList>
);
export default Tasks;