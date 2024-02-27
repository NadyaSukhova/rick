import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5vh 2vh;
`;
export const Character = styled.div`
  background-color: white;
  border-radius: 20px 20px 0 0;
  margin-bottom: 5vh;
  padding: 0 0 5vh;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 0 2%;
  &:nth-child(3) {
    margin-bottom: 6%;
  }
`;
export const Field = styled.p`
  margin: 1% 2%;
`;
export const Photo = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
  margin-bottom: 2%;
`;

export const H1 = styled.h1`
  font-weight: lighter;
`;