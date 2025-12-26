import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/pages/Home";
import { ScrollToHash } from "./utils/ScroollToHash";

function App() {
  return (
    <>
      <ScrollToHash />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
