import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Body from "./layout/Body";
import DemoLayoutGrid from "./contents/demoCode/DemoLayoutGrid";
import DemoGridGap from "./contents/demoCode/DemoGridGap";

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
          {/* <Route path="/new" element={<Grid />} /> */}
          <Route path="/new/demoGridGap" element={<DemoGridGap />} />
          <Route path="/new/demoLayoutGrid" element={<DemoLayoutGrid />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
