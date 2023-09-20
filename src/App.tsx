import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// components
import Top from "./components/Top";
import Header from "./components/Header";
import Main from "./components/Main";
// context
import { ThemeProvider } from "./contexts/ThemeContext";
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Top>
          <Header />
        </Top>
        <Main>
          <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          </AnimatePresence>
        </Main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
