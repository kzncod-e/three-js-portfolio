import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((tech, index) => (
        <div key={index} className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

const wrappedText = SectionWrapper(Tech, "tech");
export default wrappedText;
