import React from "react";
import Popup from "./Popup";
import {
  List,
  Character,
  Name,
  Field,
  Photo,
} from "../assets/styles/Character.styled.ts";

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
                onClick={() =>
                  this.setState({
                    trigger: true,
                    url: `https://rickandmortyapi.com/api/character/${item.id}`,
                  })
                }
              />
              <Name>Name: {item.name}</Name>
              <Name>ID: {item.id}</Name>
              <Field>Status: {item.status}</Field>
              <Field>Species: {item.species}</Field>
              <Field>Type: {item.type}</Field>
              <Field>Gender: {item.gender}</Field>
            </Character>
          ))}
          <Popup
            trigger={this.state.trigger}
            url={this.state.url}
            closePopup={() => this.setState({ trigger: false })}
          />
        </List>
      );
    }
  }
}

export default AllCharacters;
