import styled from "styled-components";

const addColumn="1509px";
const mediumSize="1025px";
const smallSize="426px";
export const darkBlue = "#5dbfd2";
export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 0.2em solid white;
  color: white;
  margin-right: 2%;
  &::placeholder {
    color: white;
  }
  @media (max-width: ${addColumn}) {
    font-size: 32px;
    margin-bottom: 5%;
  }
  @media (max-width: ${mediumSize}) {
    font-size: 22px;
  }
  @media (max-width: ${smallSize}) {
    font-size: 16px;
  }
`;
export const Select = styled.select`
  margin-right: 2%;
  border: none;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5% 1%;
  &:hover {
    background-color: white;
    color: ${darkBlue};
  }
  @media (max-width: ${addColumn}) {
    font-size: 32px;
    margin-bottom: 5%;
  }
  @media (max-width: ${mediumSize}) {
    font-size: 22px;
  }
  @media (max-width: ${smallSize}) {
    font-size: 16px;
  }
`;
export const SearchButton = styled.button`
  background-color: white;
  color: ${darkBlue};
  font-size: 18px;
  border: none;
  border-radius: 20px;
  width: 45%;
  padding: 0.8% 2%;
  @media (max-width: ${addColumn}) {
    padding: 0.8% 1%;
    font-size: 32px;
  }
  @media (max-width: ${mediumSize}) {
    font-size: 22px;
  }
  @media (max-width: ${smallSize}) {
    font-size: 16px;
  }
`;
export const AllButton = styled(SearchButton)`
  visibility: hidden;
`;
export const OpenButton = styled.button`
  position: absolute;
  right: 0.7%;
  background-color: transparent;
  border: none;
  font-size: 3vw;
  @media (max-width: ${addColumn}) {
    font-size: 3vw;
    top: 0;
    background-color: ${darkBlue};
    right: -6vw;
    padding: 1vw 1vw 1vw 3vw;
    border-radius: 0 20px 20px 0;
  }
  @media (max-width: ${mediumSize}) {
    font-size: 4vh;
    right: -7vh;
    padding: 1vh 1vh 1vh 3vh;
  }
`;
export const Buttons = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 25%;
  @media (max-width: ${addColumn}) {
    width: 100%;
  }
`;
export const SearchBar = styled.div`
  z-index: 2;
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  top: 0;
  margin-left: calc(-80% + 4vw);
  background-color: ${darkBlue};
  padding: 2% 0.5%;
  border-radius: 0 70px 70px 0;
  transition: margin-left 700ms;
  @media (max-width: ${addColumn}) {
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    margin-left: calc(-40% - 1.5vh);
    border-radius: 0 0 20px 0;
  }
  @media (max-width: 946px) {
    width: 50%;
    margin-left: calc(-50% - 1.5vh);
  }
  @media (max-width: 651px) {
    width: 70%;
    margin-left: calc(-70% - 1vh);
  }
`;

export const Body = styled.div`
  backdrop-filter: blur(5px);
`;

export const Img = styled.img`
  position: absolute;
  width: 40vh;
  height: auto;
  margin-left: calc(50% - 20vh);
  top: 0;
  z-indx: 1;
  @media (max-width: ${addColumn}) {
    width: 40vw;
    height: auto;
    margin-left: calc(50% - 20vw);
    top: 3vh;
  }
  @media (max-width: ${mediumSize}) {
    top: 4vh;
  }
  @media (max-width: 768px) {
    top: 5vh;
  }
`;