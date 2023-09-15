import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
// components
import Menu from "./components/Menu";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Menu>
        <Header />
        <Navbar />
      </Menu>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
