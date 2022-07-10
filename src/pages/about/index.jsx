import React, { useEffect, useState } from "react";
import "./styles.scss";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
import { useTranslation } from "react-i18next";
import aboutme from "../../assets/aboutme.mp4";


const text = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 3 },
      delay: 0,
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    delay: 0,
  },
};

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation(["about"]);

  useEffect(() => {
    const idLoading = setTimeout(() => {
      setLoading(false);
    }, 700);

    const idContent = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => {
      clearTimeout(idLoading);
      clearTimeout(idContent);
    };
  }, []);

  return (
    <div className="about">
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <motion.div className="container" animate={isOpen ? "open" : "closed"}
        variants={text}>
          <section>
            <div className="col1">
              <div className="title">{t("title", {ns: 'about'})}</div>
              <div className="description">{t("description", {ns: 'about'})}</div>
            </div>
            <div className="col2">
              <video autoPlay={true} muted loop>
                <source src={aboutme} type="video/mp4" />
              </video>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
}


export default About;