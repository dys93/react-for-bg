import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/movie/:id"} element={<Detail/>} />
        <Route path={"/react-for-bg"} element={<Home/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
