import React from "react";
import AllCharacters from "./AllCharacters";
import SearchCharacters from "./SearchCharacters";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import {
  Body,
  SearchBar,
  Input,
  Select,
  Buttons,
  SearchButton,
  AllButton,
  OpenButton,
  Img,
} from "../assets/styles/Search.styled.ts";

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
      document.getElementById("search-bar").offsetWidth /
        document.getElementById("root").offsetWidth <
      0.5
    ) {
      openWidth += "calc(-40% - 1.5vh)";
    } else {
      if (
        document.getElementById("search-bar").offsetWidth /
          document.getElementById("root").offsetWidth <
        0.7
      ) {
        openWidth += "calc(-50% - 1.5vh)";
      } else {
        if (
          document.getElementById("search-bar").offsetWidth /
            document.getElementById("root").offsetWidth <
          0.8
        ) {
          openWidth += "calc(-70% - 1vh)";
        } else {
          openWidth += "calc(-80% + 4vw)";
        }
      }
    }
    document.getElementById("search-bar").style.marginLeft !== "0%"
      ? (document.getElementById("search-bar").style.marginLeft = "0%")
      : (document.getElementById("search-bar").style.marginLeft = openWidth);
  }

  handleResize() {
    if (window.innerWidth > 1509) {
      document.getElementById("logo").src = logo1;
    } else document.getElementById("logo").src = logo2;
  }

  componentDidMount() {
    this.handleResize();
  }

  render() {
    return (
      <Body id="body">
        <SearchBar id="search-bar">
          <Input
            placeholder="Name"
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <Select
            onChange={(event) => this.setState({ status: event.target.value })}
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
            onChange={(event) => this.setState({ species: event.target.value })}
          />
          <Input
            placeholder="Type"
            onChange={(event) => this.setState({ type: event.target.value })}
          />
          <Select
            onChange={(event) => this.setState({ gender: event.target.value })}
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
        {this.state.list}
        <Img id="logo" />
        {window.addEventListener("resize", (e) => {
          this.handleResize();
        })}
      </Body>
    );
  }
}

export default Search;
