import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
      <div className="App">
        
        <SideNavbar />
        <div>
        <Routes>
          <Route path="/" element={<CharactersList />}></Route>
          <Route path="/Episodes" element={<CharactersList />}></Route>
          <Route path="/Locations" element={<CharactersList />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/:id" element={<Character />}></Route>
        </Routes>
        </div>
      </div>
  );
}

export default App;
