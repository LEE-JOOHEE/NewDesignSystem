import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Grid from "./common/Grid";
import GridGap from "./contents/demoCode/gridGap";

const GlobalStyles = createGlobalStyle`
  ${reset};
`;

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/document/*" element={<Body />} />
          <Route path="/new" element={<Grid />} />
          <Route path="/new/gridGap" element={<GridGap />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
