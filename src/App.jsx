import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import HomePage from "./Pages/HomePage.jsx";
import Categories from "./Pages/Categories.jsx";
import DeleteModal from "./components/DeleteModal.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Dashboard>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/films" element={<Categories />} />
            <Route path="/people" element={<Categories />} />
            <Route path="/planets" element={<Categories />} />
            <Route path="/species" element={<Categories />} />
            <Route path="/starships" element={<Categories />} />
            <Route path="/vehicles" element={<Categories />} />
          </Routes>
          <DeleteModal/>
        </Dashboard>
      </BrowserRouter>
    </>
  );
}

export default App;
