import React from "react";
import styled from "styled-components";

const darkBlue = "#5dbfd2";

const Pop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  top: 0;
`;

const Info = styled.div`
  position: sticky;
  top: 10%;
  background: linear-gradient(180deg, ${darkBlue} 20%, white 20%);
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  @media (max-width: 1025px) {
    width: 50%;
  }
  @media (max-width: 769px) {
    width: 80%;
  }
`;
const Photo = styled.img`
  border: 10px solid white;
  width: 50%;
  border-radius: 100%;
  margin: 5% auto 2%;
`;
const Field = styled.div`
  margin: 1% 2% 0 5%;
`;
const Close = styled.button`
  background-color: ${darkBlue};
  font-size: 20px;
  padding: 2%;
  color: white;
  margin-top: 5%;
  width: 100%;
  border: none;
`;

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
