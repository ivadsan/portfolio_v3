import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Credentials from "../Credentials";
import NavBar from "../NavBar";
import "./styles.scss";
import { motion } from "framer-motion";
import Footer from "../Footer";

const navbar = {
  open: {
    height: 150,
    opacity: 1,
  },
  closed: {
    height: 0,
    opacity: 0,
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="footerMobile">
        <Footer />
      </div>
      <div className="header">
        <Credentials />
        <AiOutlineMenu onClick={handleClick} />
      </div>
      <div className="navbarMobile">
        <motion.div animate={isOpen ? "open" : "closed"} variants={navbar}>
          <NavBar />
        </motion.div>
      </div>
    </>
  );
}
