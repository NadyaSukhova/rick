import React from "react";
import { List, Character, Name, Field, Photo } from "./AllCharacters";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: lighter;
`;

class SearchCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      chList: [],
    };
  }

  updateList() {
    let url = "?";
    if (this.props.name !== "") {
      url += `name=${this.props.name}&`;
    }
    if (this.props.species !== "") {
      url += `species=${this.props.species}&`;
    }
    if (this.props.type !== "") {
      url += `type=${this.props.type}&`;
    }
    if (this.props.gender !== "") {
      url += `gender=${this.props.gender}&`;
    }
    if (this.props.status !== "") {
      url += `status=${this.props.status}&`;
    }
    url = url.slice(0, -1);
    if (url === "?") url = "https://rickandmortyapi.com/api/character";
    else url = "https://rickandmortyapi.com/api/character" + url;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            error: null,
            chList: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      );
  }
  getSnapshotBeforeUpdate() {
    this.updateList();
  }

  componentDidMount() {
    this.updateList();
  }
  render() {
    if (this.state.chList !== undefined)
      return (
        <List>
          {this.state.chList.map((item) => (
            <Character>
              <Photo src={item.image} alt={`character_${item.id}`} />
              <Name>Name: {item.name}</Name>
              <Name>ID: {item.id}</Name>
              <Field>Status: {item.status}</Field>
              <Field>Species: {item.species}</Field>
              <Field>Type: {item.type}</Field>
              <Field>Gender: {item.gender}</Field>
            </Character>
          ))}
        </List>
      );
    else return <H1>Sorry, no characters 🙁</H1>;
  }
}

export default SearchCharacters;
