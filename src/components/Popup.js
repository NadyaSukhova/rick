import React from "react";
import { Pop, Info, Photo, Field, Close } from "../assets/styles/Popup.styled.ts";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
    };
  }

  getCharacter() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            character: JSON.parse(JSON.stringify(result)),
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) this.getCharacter();
  }

  getName(obj) {
    if (obj) {
      return obj.name;
    } else return "";
  }
  getEpisodes(arr) {
    if (arr) {
      var res = "";
      for (let ep of arr) {
        res += ep.substring(ep.indexOf("episode/") + 8, ep.length) + ", ";
      }
      return res.slice(0, -2);
    } else return "";
  }

  render() {
    return this.props.trigger ? (
      <Pop>
        <Info>
          <Photo
            src={this.state.character.image}
            alt={`character_${this.state.character.id}`}
          />
          <Field> Name: {this.state.character.name}</Field>
          <Field> Status: {this.state.character.status}</Field>
          <Field> Species: {this.state.character.species}</Field>
          <Field> Type: {this.state.character.type}</Field>
          <Field> Gender: {this.state.character.gender}</Field>
          <Field> Origin: {this.getName(this.state.character.origin)}</Field>
          <Field>
            {" "}
            Location: {this.getName(this.state.character.location)}
          </Field>
          <Field>
            {" "}
            Episodes: {this.getEpisodes(this.state.character.episode)}
          </Field>
          <Close onClick={this.props.closePopup}>Close</Close>
        </Info>
      </Pop>
    ) : (
      ""
    );
  }
}

export default Popup;
