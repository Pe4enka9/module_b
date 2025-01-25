import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import ListFiles from "./components/ListFiles/ListFiles";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<ListFiles />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
