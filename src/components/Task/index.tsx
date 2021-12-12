import React, {FC} from 'react';
import {TaskItem} from "./Task.styled";
import ITask from "../../Interfaces/ITodoList";

interface Props{
    task: ITask;
    completeTask:Function;
}

const Task:FC<Props> = ({task, completeTask}) => {
    return (
        <TaskItem>
            <span>{task.task}</span>
            <div>
                {task.deadline}
                <button onClick={() => completeTask()}>X</button>
            </div>
        </TaskItem>
    );
};

export default Task;
