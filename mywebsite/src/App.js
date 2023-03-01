import React from "react";
import './App.css';
// import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import Jobskills from "./components/Jobskills";
import Textanimation from "./components/Textanimation";
import Contact from "./components/Contact";

function App() {
    return (

        <div className="container">
            <div className="grid1"><Navbar/></div>

            <div className="grid2"><Textanimation/></div>
            {/*<div className="grid3">grid3 </div>*/}
            <div className="grid3"><Jobskills/></div>
            <div className="grid4"><Contact/></div>
        </div>
    );
}

export default App;