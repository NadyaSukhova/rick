import styled from "styled-components";
import Search from "./components/Search";
import background from './assets/background.png';

const AppBody = styled.div`
background-image: url(${background});
backdrop-filter: blur(10px);
background-attachment: fixed;
background-size: cover;
min-height: 100vh;
`;

function App() {
  return (
    <AppBody>
      <Search/>
    </AppBody>
  );
}

export default App;

