import { HeartIcon } from "lucide-react";
import { motion } from "motion/react";

import "./homePage.scss";

const HomePage = () => {
  // Animation variants
  const fadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const staggerChildren = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"
          style={{
            filter: "brightness(0.3)",
          }}
        ></div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div variants={fadeIn}>
            <HeartIcon className="h-16 w-16 text-white mx-auto" />
          </motion.div>
          <motion.h1
            className="mt-6 text-5xl font-serif font-light text-white tracking-wide"
            variants={fadeIn}
          >
            Rhi & Rashaad
          </motion.h1>
          <motion.div
            className="mt-4 text-xl text-gray-200 font-light tracking-widest"
            variants={fadeIn}
          >
            ARE GETTING MARRIED
          </motion.div>
          <motion.div
            className="mt-8 text-2xl font-serif text-white"
            variants={fadeIn}
          >
            June 20, 2026
          </motion.div>
          <motion.div className="mt-16" variants={fadeIn}>
            <p className="text-lg text-gray-200">
              Welcome
              {/* <span className="font-medium">{guest.name}</span> */}
            </p>
          </motion.div>
          <motion.div className="mt-12" variants={fadeIn}>
            <a
              href="#details"
              className="inline-block border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW DETAILS
            </a>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <motion.div
            initial={{
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
          >
            <svg
              className="w-6 h-6 mx-auto text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </motion.div>
        </div>
      </div>

      <section id="details" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-serif mb-2">
              Do you have an invite code?
            </h2>
            <div className="w-20 h-0.5 bg-white mx-auto"></div>
          </motion.div>
        </div>

        <motion.div
          // className="py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={fadeInUp}
        >
          {/* <div className="space-y-8 grid grid-cols-3"> */}
          <div className="code">
            <div className="form-control">
              {/* <label htmlFor="inviteCode" className="">
                Invite Code
              </label> */}
              <input
                type="text"
                id="inviteCode"
                placeholder="Enter invite code here..."
                // className="w-full px-3 py-2 border-border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-white text-white"
              />
            </div>
            <button className="submit-code">Submit</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
