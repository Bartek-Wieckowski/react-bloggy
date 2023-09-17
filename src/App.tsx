import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
// components
import Top from "./components/Top";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Top>
        <Header />
        <Navbar />
      </Top>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
