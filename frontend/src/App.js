import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateSpace } from "./components/CreateSpace";
import { Space } from "./components/Space";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/create-space' element={<CreateSpace />} />
          <Route exact path='/space' element={<Space />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/sign-up' element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </div>
  );
}

export default App;
