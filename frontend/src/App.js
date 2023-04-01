import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateSpace } from "./components/CreateSpace";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='create-space' element={<CreateSpace />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </div>
  );
}

export default App;
