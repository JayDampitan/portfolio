import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import MovieApp from "./Work/MovieApp";
import PokeApp from "./Work/PokeApp";
import TribuneApp from "./Work/TribuneApp";
import KovviApp from "./Work/KovviApp";
import { MovieAppImages } from "../assets/data";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movieApp" element={<MovieApp />}/>
        <Route path="/pokeApp" element={<PokeApp />}/>
        <Route path="/tribuneApp" element={<TribuneApp />}/>
        <Route path="/kovviApp" element={<KovviApp />}/>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
