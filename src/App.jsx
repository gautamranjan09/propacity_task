import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import HomePage from "./Pages/HomePage";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      {/* <Header/>
    <Sidebar/> */}

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
        </Dashboard>
      </BrowserRouter>
    </>
  );
}

export default App;
