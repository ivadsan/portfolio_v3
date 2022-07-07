import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./styles.scss";
import { FaUserAstronaut, FaGripHorizontal, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const list = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const items = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 1 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(["common"]);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(id);
  }, []);
  return (
    <div className="navBar">
      <motion.ul variants={list} animate="open">
        <motion.li
          animate={isOpen ? "open" : "closed"}
          variants={items}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <div className="icon">
              <FaUserAstronaut />
            </div>

            <span className="option">{t("aboutMe")}</span>
          </Link>
        </motion.li>
        <motion.li
          animate={isOpen ? "open" : "closed"}
          variants={items}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/portfolio">
            <div className="icon">
              <FaGripHorizontal />
            </div>

            <span className="option">{t("portfolio")}</span>
          </Link>
        </motion.li>
        {/* <motion.li
          animate={isOpen ? "open" : "closed"}
          variants={items}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/skills">
            <div className="icon">
              <FaUserTie />
            </div>

            <span className="option">{t("skills")}</span>
          </Link>
        </motion.li> */}
      </motion.ul>
    </div>
  );
}
