import styled from "styled-components";

export const HeaderContainer = styled.div`
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  border: 1px solid #4F4FD9;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  font-size: 1rem;
  height: 2rem;
  border: none;
  padding: 0.3rem;
  
  &:first-child{
    border-right: 1px solid #4F4FD9;
  }
  
`;

export const HeaderInput = styled(Input)`
  width: 100%;
  height: 2rem;
`;

export const NumberInput = styled(Input)`
  width: 3rem;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: .5rem;
  color: #fff;
  background: #BA86FC;
  border: none;
  
  &:active{
    background: #7373D9;
  }
`;