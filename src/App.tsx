import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
