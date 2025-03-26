import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Films from "./pages/Films";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <>
      {/* <Header/>
    <Sidebar/> */}

      <BrowserRouter>
        <Dashboard>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/films" element={<Films />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/species" element={<Species />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/vehicles" element={<Vehicles />} />
          </Routes>
        </Dashboard>
      </BrowserRouter>
    </>
  );
}

export default App;
