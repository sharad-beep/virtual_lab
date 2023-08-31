
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Layout/HomePage';
import DbmsCo from './Layout/MainMenu/DbmsCo';
import CppCo from './Layout/MainMenu/CppCo';
import ListOfExp from './Layout/MainMenu/ListOfExp';
import TarAud from './Layout/MainMenu/TarAud';
import OneNf from './Layout/normalization/OneNf';
import TwoNf from './Layout/normalization/TwoNf';
import ThreeNf from './Layout/normalization/ThreeNf';
import BcNf from './Layout/normalization/BcNf';
import AcidPro from './Layout/Transaction/AcidPro';
import ConCurr from './Layout/Transaction/ConCurr';
import Serial from './Layout/Transaction/Serial';
import Dml from './Layout/SQL/Dml';
import Dcl from './Layout/SQL/Dcl';
import Tcl from './Layout/SQL/Tcl';
import Ddl from './Layout/SQL/Ddl';
import Joins from './Layout/SQL/Joins';
import Procedure from './Layout/PLSQL/Procedure';
import Cursors from './Layout/PLSQL/Cursors';
import Triggers from './Layout/PLSQL/Triggers';
import Exceptions from './Layout/PLSQL/Exceptions';
import FourNf from './Layout/normalization/FourNf';
import FiveNf from './Layout/normalization/FiveNf';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/cpp" element={<CppCo/>}></Route>
        <Route path="/dbms" element={<DbmsCo/>}></Route>
        <Route path="/listofexp" element={<ListOfExp/>} > </Route>
        <Route path="listofexp/normal" element={<OneNf/>} > </Route>
        <Route path="/1nf" element={<OneNf/>} > </Route>
        <Route path="/2nf" element={<TwoNf/>} > </Route>
        <Route path="/3nf" element={<ThreeNf/>} > </Route>
        <Route path="/4nf" element={<FourNf/>} > </Route>
        <Route path="/5nf" element={<FiveNf/>} > </Route>
        <Route path="/bcnf" element={<BcNf/>} > </Route>
        <Route path="/target" element={<TarAud/>} > </Route>
        <Route path="/acidpro" element={<AcidPro/>} > </Route>
        <Route path="/concurr" element={<ConCurr/>} > </Route>
        <Route path="/serial" element={<Serial/>} > </Route>
        <Route path="listofexp/trans" element={<AcidPro/>} > </Route>
        <Route path="listofexp/sql" element={<Dml/>} > </Route>
        <Route path="/dml" element={<Dml/>}></Route>
        <Route path="/dcl" element={<Dcl/>}></Route>
        <Route path="/tcl" element={<Tcl/>}></Route>
        <Route path="/ddl" element={<Ddl/>}></Route>
        <Route path="/joins" element={<Joins/>}> </Route>
        <Route path="listofexp/plsql" element={<Procedure/>} > </Route>
        <Route path="/procedure" element={<Procedure/>}></Route>
        <Route path="/Cursors" element={<Cursors/>}></Route>
        <Route path="/Trigger" element={<Triggers/>}></Route>
        <Route path="/Exceptions" element={<Exceptions/>}></Route>
       
      </Routes>
    </BrowserRouter>
    );
}

export default App;
