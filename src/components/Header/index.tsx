import React, { FC, useState} from 'react';
import {Button, HeaderContainer, HeaderInput, InputContainer, NumberInput} from "./Header.styled";

interface Props{
    addTask(task: string, deadline: number): void;
}

const Header: FC<Props> = ({addTask}) => {
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);

    const handleClick = ():void => {
        addTask(task, deadline);
        setTask('');
        setDeadline(0);
    }
    return (
        <HeaderContainer>
            <InputContainer>
                <HeaderInput type="text" value={task} onChange={e => setTask(e.target.value)}/>
                <NumberInput type="number" min={0} value={deadline} onChange={e => setDeadline(Number(e.target.value))}/>
            </InputContainer>
            <Button onClick={handleClick}>+ Add task</Button>
        </HeaderContainer>
    );
};

export default Header;
