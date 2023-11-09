import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MenuBar from './components/menubar';
import Projects from "./pages/projectsListView";
import Aboutme from "./pages/aboutme";


function App() {

  return (
    <div className="Container App-header">
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
