import "./assets/css/bootstrap.mh.min.css";
import "./assets/css/jquery.fancybox.min.css"
import "./assets/css/style.css"

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Header from "./Components/Header";
import About from "./Pages/About";
import {Routes, Route, Link} from "react-router-dom";
import {useEffect} from "react";

function App() {
    const news = <p><strong>COVID-19 safety protools:</strong> All staff wear masks and gloves while
        cleaning. <Link to="#">Learn more.</Link></p>;

    return (
        <>
            <Header news={news}/>

            <Routes>
                <Route path="/" exact
                       element={
                           <>
                               <Home/>
                               <Footer choice={2}/>
                           </>
                       }
                />
                <Route path="/services" exact
                       element={
                           <>
                               <Services/>
                               <Footer choice={1}/>
                           </>
                       }
                />
                <Route path="/about" exact
                       element={
                           <>
                               <About/>
                               <Footer choice={2}/>
                           </>
                       }
                />

            </Routes>
        </>
    );
}

export default App;
