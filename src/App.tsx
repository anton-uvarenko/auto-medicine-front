import './App.css';
import { Routes, Route } from "react-router-dom";
import Registration from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/register/" element={<Registration />} />
      <Route path="/login/" element={<Login />} />
    </Routes>
  );
}

export default App;
