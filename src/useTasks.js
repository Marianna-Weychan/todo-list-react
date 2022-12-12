import { useEffect, useState } from "react";

const tasksStorage = JSON.parse(localStorage.getItem("tasks")) || [];

export const useTasks = () => {

    const [tasks, setTasks] = useState(tasksStorage);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task =>
            task.id === id
                ? { ...task, done: !task.done }
                : task
        ));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask
    };
};