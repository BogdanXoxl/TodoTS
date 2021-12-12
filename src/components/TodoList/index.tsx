import React, {FC} from 'react';
import {TodoListContainer} from "./TodoList.styled";
import ITask from "../../Interfaces/ITodoList";
import Task from "../Task";

interface Props{
    tasks: ITask[];
    completeTask: (task: ITask) => Function;
}

const TodoList:FC<Props> = ({tasks, completeTask}) => {
    return (
        tasks.length?
            <TodoListContainer>
                {tasks.map(t => (
                    <Task task={t} completeTask={completeTask(t)}/>
                ))}
            </TodoListContainer>
        :<></>
    );
};

export default TodoList;
