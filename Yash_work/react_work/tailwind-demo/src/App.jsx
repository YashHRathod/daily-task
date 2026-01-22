import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Tablebox from "./component/Tablebox";
import LoginForm from "./component/LoginForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Tablebox />} />
      <Route path="/form" element={<LoginForm />} />
    </Routes>
  );
}
