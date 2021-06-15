import React from "react";
//import { Router } from "react-router";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import {BrowserRouter as Router, Route } from "react-router-dom";
// import cat from './download.jpg';
import Gowron from './imgs/gowron.jpg';
import CAD from './imgs/CAD.jpeg';
import SweetJesus from './imgs/sj.gif';

function App() {
    return (

        <Router>
            <main>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/Contact" component={Contact} />
            </main>
        </Router>

    );
}

const Home = () => (
    <>
        <h1>Home</h1>
        <FakeText1 />
        <img src={Gowron}  alt="Megalomaniac" />
    </>
);

const About = () => (
    <>
        <h1>About</h1>
        <FakeText2 />
        <img src={CAD} alt="Canadian freedome units" />
    </>
);

const Contact = () => (
    <>
        <h1>Contact</h1>
        <FakeText3 />
        <img src={SweetJesus} alt="Don't drinks and fly, kids." />
    </>
);

const FakeText1 = () => (
    <>
    <p>This is the Glorious HOME PAGE</p>
    <h2>GLORY TO YOU, AND YOUR HOUSE!</h2>
    </>
);

const FakeText2 = () => (
    <>
    <p>This is the Glorious HAboot Page</p>
    <h2>COME GIT YET MAYPL SHEERP A UN CAnadian BACOON!</h2>
    </>
);

const FakeText3 = () => (
    <>
    <p>This is the Glorious CONTACT PAGE</p>
    <h2>SWEET Potatoes!</h2>
    </>
)
    // return <>
    //     <BrowserRouter>
    //         <Switch>
    //             <Route exact path="/">
    //                 <h1 style={{backgroundColor: "lightgreen"}}>Home</h1>
    //                 <img src="download.jpg" alt="A pretty tat."></img>

    //             </Route>
    //             <Route path="/about">
    //                 Aboout Us

    //             </Route>
    //         </Switch>
    //     </BrowserRouter>
    // </>
//}

export default App;