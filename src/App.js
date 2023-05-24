import { Route, Routes } from "react-router-dom";
import Games from "./Components/games";
import Hero from "./Components/hero";
import Nav from "./Components/nav";
import PreNav from "./Components/preNav";
import Slide from "./Components/slider";
import Cs from "./preNavpage/cs";
import Dota from "./preNavpage/dota";
import Duty from "./preNavpage/duty";
import League from "./preNavpage/league";
import Pokemon from "./preNavpage/pokemon";
//import Speacial from "./preNavpage/cs";
import Page1 from "./routerpage/page1";
import Page2 from "./routerpage/page2";
import Page3 from "./routerpage/page3";
import Page4 from "./routerpage/page4";
import Page5 from "./routerpage/page5";

function App() {
  return (
    <>
        <Nav/>
        <PreNav/>
          <Routes>
            <Route path="/" element={<Page1/>} />
            <Route path="page2" element={<Page2/>} />
            <Route path="page3" element={<Page3/>} />
            <Route path="page4" element={<Page4 />} />
            <Route path="page5" element={<Page5 />} />
          </Routes>
          <Routes>
            <Route path="league" element={<League/>}/>
            <Route path="cs" element={<Cs/>}/>
            <Route path="duty" element={<Duty/>}/>
            <Route path="dota" element={<Dota/>}/>
            <Route path="pokemon" element={<Pokemon/>}/>                   
          </Routes>

        <Hero/>
        <Games/>
        <Slide/>
    </>
  );
}

export default App;

