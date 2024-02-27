import styled from "styled-components";
import background from '../background.png';

export const AppBody = styled.div`
background-image: url(${background});
backdrop-filter: blur(10px);
background-attachment: fixed;
background-size: cover;
min-height: 100vh;
`;