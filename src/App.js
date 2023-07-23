import "./App.css";
import AdditinalInfo from "./components/AdditinalInfo";
import Demo from "./components/Demo";
import Demotwo from "./components/Demotwo";
import FirstView from "./components/FirstView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
     <BrowserRouter>
    <Routes>
      <Route path="/" element={ <FirstView />}/>
      <Route path="demo" element={ <Demo />}/>

      {/* <Demo/> */}
      {/* <Demotwo/> */}

    </Routes>
  </BrowserRouter>
);
}

export default App;