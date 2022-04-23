import Pages from "./pages/Pages";
import Category from "./components/Category";
import "./index.css";
import {BrowserRouter, Link} from 'react-router-dom'
import Cuisine from "./pages/Cuisine";
import Search from "./components/Search";
import {GiKnifeFork} from "react-icons/gi";
import styled from "styled-components"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav>
      <GiKnifeFork />
      <Logo to={"/"}>HomePage</Logo>
    </Nav>
        <Search/>
         <Category/>
         <Pages/>
         <Cuisine/>
         
     </BrowserRouter>
    </div>
  );
}

const Logo =styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: helvetica;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items:center;

`
export default App;
