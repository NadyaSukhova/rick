import React from "react";
import styled from "styled-components";
import AllCharacters from "./AllCharacters";
import SearchCharacters from "./SearchCharacters";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const darkBlue = "#5dbfd2";
const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 0.2em solid white;
  color: white;
  margin-right: 2%;
  &::placeholder {
    color: white;
  }
  @media (max-width: 1509px) {
    font-size: 32px;
    margin-bottom: 5%;
  }
  @media (max-width: 1025px) {
    font-size: 22px;
  }
  @media (max-width: 426px) {
    font-size: 16px;
  }
`;
const Select = styled.select`
  margin-right: 2%;
  border: none;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5% 1%;
  &:hover {
    background-color: white;
    color: ${darkBlue};
  }
  @media (max-width: 1509px) {
    font-size: 32px;
    margin-bottom: 5%;
  }
  @media (max-width: 1025px) {
    font-size: 22px;
  }
  @media (max-width: 426px) {
    font-size: 16px;
  }
`;
const SearchButton = styled.button`
  background-color: white;
  color: ${darkBlue};
  font-size: 18px;
  border: none;
  border-radius: 20px;
  width: 45%;
  padding: 0.8% 2%;
  @media (max-width: 1509px) {
    padding: 0.8% 1%;
    font-size: 32px;
  }
  @media (max-width: 1025px) {
    font-size: 22px;
  }
  @media (max-width: 426px) {
    font-size: 16px;
  }
`;
const AllButton = styled.button`
  visibility: hidden;
  background-color: white;
  color: ${darkBlue};
  font-size: 18px;
  border: none;
  border-radius: 20px;
  padding: 0.8% 2%;
  width: 45%;
  @media (max-width: 1509px) {
    padding: 0.8% 1%;
    font-size: 32px;
  }
  @media (max-width: 1025px) {
    font-size: 22px;
  }
  @media (max-width: 426px) {
    font-size: 16px;
  }
`;
const OpenButton = styled.button`
  position: absolute;
  right: 0.7%;
  background-color: transparent;
  border: none;
  font-size: 3vw;
  @media (max-width: 1509px) {
    font-size: 3vw;
    top: 0;
    background-color: ${darkBlue};
    right: -6vw;
    padding: 1vw 1vw 1vw 3vw;
    border-radius: 0 20px 20px 0;
  }
  @media (max-width: 1025px) {
    font-size: 4vh;
    right: -7vh;
    padding: 1vh 1vh 1vh 3vh;
  }
`;
const Buttons = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 25%;
  @media (max-width: 1509px) {
    width: 100%;
  }
`;
const SearchBar = styled.div`
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
  @media (max-width: 1509px) {
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    margin-left: calc(-40% - 1.5vh);
    border-radius: 0 0 20px 0;
  }
  @media (max-width: 946px) {
    width: 50%;
    margin-left: calc(-50% - 1vh);
  }
  @media (max-width: 651px) {
    width: 70%;
    margin-left: calc(-70% - 1vh);
  }
`;

const Body = styled.div`
  backdrop-filter: blur(5px);
`;

const Header = styled.div`
  height: fit-content;
  width: 100%;
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-image: url(${logo1});
  @media (max-width: 1509px) {
    background-image: url(${logo2});
  }
`;
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchList = this.searchList.bind(this);
    this.allList = this.allList.bind(this);
    this.state = {
      list: <AllCharacters />,
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
    };
  }
  searchList() {
    this.setState({
      list: (
        <SearchCharacters
          name={this.state.name}
          status={this.state.status}
          species={this.state.species}
          type={this.state.type}
          gender={this.state.gender}
        />
      ),
    });
    document.getElementsByClassName("show-all")[0].style.visibility = "visible";
  }
  allList() {
    this.setState({
      list: <AllCharacters />,
      name: "",
      status: "",
      gender: "",
      species: "",
      type: "",
    });
    document.getElementsByClassName("show-all")[0].style.visibility = "hidden";
    var inputs = document.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    inputs = document.querySelectorAll("select");
    for (i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }

  openSearch() {
    var openWidth = "";
    if (
      document.getElementsByClassName("search-bar")[0].offsetWidth /
        document.getElementById("root").offsetWidth <
      0.5
    ) {
      openWidth += "calc(-40% - 1.5vh)";
    } else {
      if (
        document.getElementsByClassName("search-bar")[0].offsetWidth /
          document.getElementById("root").offsetWidth <
        0.7
      ) {
        openWidth += "calc(-50% - 1vh)";
      } else {
        if (
          document.getElementsByClassName("search-bar")[0].offsetWidth /
            document.getElementById("root").offsetWidth <
          0.8
        ) {
          openWidth += "calc(-70% - 1vh)";
        } else {
          openWidth += "calc(-80% + 4vw)";
        }
      }
    }
    document.getElementsByClassName("search-bar")[0].style.marginLeft !== "0%"
      ? (document.getElementsByClassName("search-bar")[0].style.marginLeft =
          "0%")
      : (document.getElementsByClassName(
          "search-bar"
        )[0].style.marginLeft = openWidth);
  }

  render() {
    return (
      <Body>
        <Header>
          <SearchBar className="search-bar">
            <Input
              placeholder="Name"
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <Select
              onChange={(event) =>
                this.setState({ status: event.target.value })
              }
            >
              <option value="" hidden>
                Status
              </option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </Select>
            <Input
              placeholder="Species"
              onChange={(event) =>
                this.setState({ species: event.target.value })
              }
            />
            <Input
              placeholder="Type"
              onChange={(event) => this.setState({ type: event.target.value })}
            />
            <Select
              onChange={(event) =>
                this.setState({ gender: event.target.value })
              }
            >
              <option value="" hidden>
                Gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">unknown</option>
            </Select>
            <Buttons>
              <SearchButton onClick={this.searchList}>Поиск</SearchButton>
              <AllButton onClick={this.allList} className="show-all">
                Все персонажи
              </AllButton>
            </Buttons>
            <OpenButton onClick={this.openSearch}>🔍</OpenButton>
          </SearchBar>
        </Header>
        {this.state.list}
      </Body>
    );
  }
}

export default Search;
