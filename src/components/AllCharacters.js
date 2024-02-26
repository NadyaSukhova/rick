import React from "react";
import Popup from "./Popup";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5vh 2vh;
`;
const Character = styled.div`
  background-color: white;
  border-radius: 20px 20px 0 0;
  margin-bottom: 5vh;
  padding: 0 0 5vh;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 0 2%;
  &:nth-child(3) {
    margin-bottom: 6%;
  }
`;
const Field = styled.p`
  margin: 1% 2%;
`;
const Photo = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
  margin-bottom: 2%;
`;

class AllCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      chList: [],
      page: 2,
      trigger: false,
      url: "",
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            chList: result.results,
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

  loadMore() {
    if (this.state.page <= 42) {
      this.setState({ page: this.state.page + 1 });
      fetch(`https://rickandmortyapi.com/api/character?page=${this.state.page}`)
        .then((res) => res.json())
        .then(
          (result) => {
            if (
              result.results &&
              this.state.chList.slice(-1)[0].id + 1 === result.results[0].id
            ) {
              this.setState({
                isLoaded: true,
                chList: [...this.state.chList, ...result.results],
              });
            }
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  }

  render() {
    const handleClick = () => {
      const position =
        document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight;
      if (position < 100) {
        this.loadMore();
      }
    };
    window.addEventListener("scroll", handleClick);
    const { error, isLoaded, chList } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <List>
          {chList.map((item) => (
            <Character>
              <Photo
                src={item.image}
                alt={`character_${item.id}`}
                onClick={() => this.setState({trigger: true, url: `https://rickandmortyapi.com/api/character/${item.id}`})}
              />
              <Name>Name: {item.name}</Name>
              <Name>ID: {item.id}</Name>
              <Field>Status: {item.status}</Field>
              <Field>Species: {item.species}</Field>
              <Field>Type: {item.type}</Field>
              <Field>Gender: {item.gender}</Field>
            </Character>
          ))}
          <Popup trigger={this.state.trigger} url={this.state.url} closePopup={() => this.setState({trigger: false})}/>
        </List>
      );
    }
  }
}

export default AllCharacters;
export { Character, List, Photo, Name, Field };
