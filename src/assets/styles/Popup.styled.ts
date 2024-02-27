import styled from "styled-components";
import { darkBlue } from "./Search.styled.ts";

const middleSize = '1025px';
const smallSize = '769px';

export const Pop = styled.div`
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  top: 0;
`;

export const Info = styled.div`
  position: sticky;
  top: 5%;
  background: linear-gradient(180deg, ${darkBlue} 20%, white 20%);
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  @media (max-width: ${middleSize}) {
    width: 50%;
  }
  @media (max-width: ${smallSize}) {
    width: 80%;
  }
`;
export const Photo = styled.img`
  border: 10px solid white;
  width: 50%;
  border-radius: 100%;
  margin: 5% auto 2%;
`;
export const Field = styled.div`
  margin: 1% 2% 0 5%;
`;
export const Close = styled.button`
  background-color: ${darkBlue};
  font-size: 20px;
  padding: 2%;
  color: white;
  margin-top: 5%;
  width: 100%;
  border: none;
`;