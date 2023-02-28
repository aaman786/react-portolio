import React, { useRef } from "react";
import { motion, animate } from "framer-motion";
import TypeWriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../../assets/logo.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationCount = (key) => {
    animate(0, key === "clients" ? 0 : 5, {
      duration: 1,
      onUpdate: (v) =>
        key === "clients"
          ? (clientCount.current.textContent = v.toFixed())
          : (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    button: {
      initial: { y: "-100%", opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br />
            Aman Satvilkar
          </motion.h1>
          <TypeWriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewritterpara",
            }}
          />

          <div>
            <a href="mailto:official.6packprogrammer@gmail.com">Hire Me!</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              <motion.span
                whileInView={() => animationCount("clients")}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={() => animationCount("")}
                ></motion.span>
              </p>
              <span>Projects Done!</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>satvilkaraman@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Aman" />
        <BsChevronDown />
      </section>
    </div>
  );
};

export default Home;
