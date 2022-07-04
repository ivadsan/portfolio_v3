import React, { useState, useEffect } from "react";
import "./styles.scss";
import Card from "../../components/Card";
import { motion } from "framer-motion";
import { data } from "../../bd/portfolio";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { projects } = data;

  const handleClick = (id) => {
    setIsOpen(true);
  };

  useEffect(() => {
    const idLoading = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => {
      clearTimeout(idLoading);
    };
  }, []);

  return (
    <>
      <div className="portfolio">
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <div className="portfolio__container">
            {projects.length > 0 &&
              projects.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <Card
                    key={index}
                    imgUrl={data?.cover}
                    projectName={data?.project}
                    technologies={data?.technologies}
                    handleClick={handleClick}
                  />
                </motion.div>
              ))}
          </div>
        )}
      </div>
      {isOpen && <Modal isOpen={isOpen} />}
    </>
  );
}
