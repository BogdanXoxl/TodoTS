import styled from "styled-components";

export const TaskItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-left: 1rem;
  
  &:not(:last-child){
    border-bottom: 1px solid #BA86FC;
  }
  
  &:hover{
    background: #121212;
  }
  
  div{
    border-left: 1px solid #BA86FC;
    width: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 5px .5rem;
    
    
    button{
      padding: 5px;
      border: none;
      background: #BA86FC;
      font-weight: 700;
      font-size: 1rem;
      width: 1.6rem;
    }
  }

  
  animation: slidein linear .3s;
  

  @keyframes slidein {
    from {
      transform: translateX(-150%);
    }

    to {
      transform: translateX(0);
    }
  }
  
`;