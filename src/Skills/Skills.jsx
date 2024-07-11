import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faJava,
  faReact,
  faHtml5,
  faNode,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const skills = [faJs, faJava, faReact, faHtml5, faNode, faGitAlt];
function Skills() {
  //JavaScript React CSS HTML NODE Git Java Express Redux
  return (
    <div className="mx-32 my-16 bg-orange-500 rounded-3xl h-72 xl:mx-44 ">
      <ul className="flex justify-between mx-16 space-x-4 my-9">
        {skills.map((skill, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={skill} className="w-24 h-24 text-white" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
