import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
// components
import Top from "./components/Top";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Top>
        <Header />
      </Top>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
