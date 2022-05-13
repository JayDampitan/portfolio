import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HomeIcon, AboutIcon, WorkIcon, ContactIcon } from "../AllSvgs";
import { Nav, NavLinksContainer, LinkWrapper, NavLinks } from "./navbarStyles";
import { linksVariant } from "./navbarVariants";

const Navbar = () => {
  const setLocalStorage = (currentPage) => {
    window.sessionStorage.setItem("currentPage", currentPage);
    setSelectedPage(currentPage);
  };

  useEffect(() => {
    const page = window.sessionStorage.getItem("currentPage");
    setSelectedPage(page || "home");
  }, []);

  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <Nav>
      <NavLinksContainer
        as={motion.div}
        variants={linksVariant}
        initial="hidden"
        animate="visible"
      >
        <LinkWrapper
          className={`${selectedPage === "home" && selectedPage}`}
          onClick={() => {
            setLocalStorage("home");
          }}
          as={motion.div}
        >
          <NavLinks
            className={`${selectedPage === "home" && selectedPage}`}
            to="/"
          >
            <HomeIcon />
          </NavLinks>
        </LinkWrapper>

        <LinkWrapper
          className={` ${selectedPage === "about" && selectedPage}`}
          onClick={() => {
            setLocalStorage("about");
          }}
          as={motion.div}
        >
          <NavLinks
            className={`${selectedPage === "about" && selectedPage}`}
            to="/about"
          >
            <AboutIcon />
          </NavLinks>
        </LinkWrapper>

        <LinkWrapper
          className={`${selectedPage === "portfolio" && selectedPage}`}
          onClick={() => {
            setLocalStorage("portfolio");
          }}
          as={motion.div}
        >
          <NavLinks
            className={`${selectedPage === "portfolio" && selectedPage}`}
            to="/portfolio"
          >
            <WorkIcon />
          </NavLinks>
        </LinkWrapper>

        <LinkWrapper
          className={`${selectedPage === "contact" && selectedPage}`}
          onClick={() => {
            setLocalStorage("contact");
          }}
          as={motion.div}
        >
          <NavLinks
            className={`${selectedPage === "contact" && selectedPage}`}
            to="/contact"
          >
            <ContactIcon />
          </NavLinks>
        </LinkWrapper>
      </NavLinksContainer>
    </Nav>
  );
};

export default Navbar;
