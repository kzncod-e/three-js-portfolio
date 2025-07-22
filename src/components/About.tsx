import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles/style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";
import { useInView } from "react-intersection-observer";
const About = () => {
  const ServiceCard = ({
    index,
    title,
    icon,
  }: {
    title: string;
    icon: string;
    index: number;
  }) => {
    return (
      <Tilt
        className="xs:w-[250px] w-full"
        options={{ max: 45, scale: 1, speed: 450 }}>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}>
        I'm a web developer with experience in TypeScript and JavaScript,
        focusing on frameworks like React.js, Next.js, and Node.js for backend
        development. I have a passion for creating efficient and scalable web
        applications.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {/* Loop through the services array */}
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </>
  );
};

// Wrap About component using SectionWrapper
const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
