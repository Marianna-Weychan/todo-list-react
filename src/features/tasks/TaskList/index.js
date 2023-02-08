import { TasksList as TaskList, Item, Content, Button } from "./styled";


const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TaskList>
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
    </TaskList>
);
export default TaskList;