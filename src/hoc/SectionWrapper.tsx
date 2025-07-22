import { motion } from "framer-motion";
import { styles } from "../styles/style";
import { staggerContainer } from "../utils/motion";
import { useInView } from "react-intersection-observer";

const SectionWrapper = (Component: React.FC, idName: string) => {
  return function HOC() {
    const { ref, inView } = useInView({
      threshold: 0.25,
    });
    return (
      <motion.section
        id={idName} // Tambahkan id agar bisa digunakan sebagai navigasi
        ref={ref}
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Conditionally apply the show animation
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span " id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
