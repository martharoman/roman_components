import styled from 'styled-components';
import { AiOutlineRocket } from "react-icons/ai";
import GoogleMap from './GoogleMap';
import Examen from './Examen';
import './App.css';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  font-family: century Gothic;
  font-weight: bold;
  padding: .8em;
  border: 2px solid palevioletred;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  margin-left: 1em;
  margin-top: 1em;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  text-decoration: none;
`;

function App() {
  return (

    <div align="center">
      <span> ㅤ </span>
      <h2>Martha Andrea Roman Hernández</h2>
      <h1><AiOutlineRocket/></h1>
      <Button as="a" href="https://utd.edu.mx/" target="_blank">Universidad Tecnológica de Durango</Button>
      <TomatoButton as="a" href="https://github.com/martharoman" target="_blank">Mi cuenta de GitHub</TomatoButton>
      <TomatoButton as="a" href="https://www.instagram.com/martha.rxh/" target="_blank">Mi cuenta de Instagram</TomatoButton>
      <Examen></Examen>
      <GoogleMap></GoogleMap>
    </div>

  );
}

export default App;
