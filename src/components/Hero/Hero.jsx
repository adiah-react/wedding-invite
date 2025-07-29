import { motion } from "motion/react";
import "./hero.scss";

const Hero = ({ name }) => {
  return (
    <div className="hero">
      <motion.p
        className="top-text"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Wah gwan {name},
        <br />
        You're cordially invited
      </motion.p>
      <div className="image"></div>
      <motion.div
        className="text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.p
          className="subheading"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Celebrating the beautiful beginning of
        </motion.p>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
          viewport={{
            once: true,
            // margin: "-200px",
            // amount: 0.75
          }}
        >
          Rhiannon <span className="cursive">&amp;</span> Rashaad
        </motion.h1>
        <motion.div
          className="date"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >
          <p className="month">June</p>
          <p className="day">20</p>
        </motion.div>
        {/* <p className="date">
          June <span>20</span>
        </p> */}
        <motion.div
          className="details"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p>Two o'clock in the afternoon</p>
          <p>St. Benedict's Roman Catholic Church, La Romaine</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
