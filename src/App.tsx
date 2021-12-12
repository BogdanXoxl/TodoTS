import React, {FC, useState} from 'react';
import * as uuid from 'uuid';
import Header from "./components/Header";
import ITask from "./Interfaces/ITodoList";
import TodoList from "./components/TodoList";
import {Container, GlobalStyles} from "./app.styled";

const App:FC = () => {
    const [list, setList] = useState<ITask[]>([]);

    const addTask = (task: string, deadline = 0):void => {
        if(task.trim())
            setList([ ...list, {task, deadline, id: uuid.v4()}]);
    };

    const completeTask = (task: ITask):Function => {
        return ():void => setList(list.filter((t) => t !== task));
    }

    return (
        <>
            <Container>
                <Header addTask={addTask}/>
                <TodoList tasks={list} completeTask={completeTask}/>
            </Container>
            <GlobalStyles/>
        </>
    );
}

export default App;
