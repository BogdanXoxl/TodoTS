import styled, {createGlobalStyle} from "styled-components";

export const Container = styled.div`
  width: 360px;
  padding: 10px;
  overflow: hidden;
  border-radius: 7px;
  background: #1E1E1E;
`;

export const GlobalStyles = createGlobalStyle`
 *{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   outline: none;
   
   &:hover, &:visited, &:active{
     text-decoration: none;
   }
 }
 
 html{
   width: 100%;
   height: 100%;
   background: #121212;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 5rem;
 }
`;