import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Social from "./pages/Social.jsx";
import Login from "./pages/login/Login.jsx";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/social" element={<Social />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
