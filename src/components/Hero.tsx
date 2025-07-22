import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles/style";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Hero = ({ activeSection, setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const sentence = "Hi, I'm Mohamad".split("");
  const paragraph =
    "I develop modern web applications with JavaScript, both back-end and front-end.".split(
      " "
    );
  useEffect(() => {
    if (inView) setActiveSection("hero");
  }, [inView, setActiveSection]);
  return (
    <section ref={ref} className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-[#915eff] flex`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } },
            }}>
            {sentence.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={index < 3 ? " text-[#915eff]" : "text-[#ffff]"}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100 flex flex-wrap`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}>
            {paragraph.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mr-1 inline-block">
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
      {activeSection === "hero" && <ComputersCanvas key={"computercanvas"} />}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
