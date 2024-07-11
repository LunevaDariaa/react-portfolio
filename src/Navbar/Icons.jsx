import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faListCheck,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
function Icons() {
  return (
    <ul className="flex flex-col items-center justify-center space-y-8">
      <li className="icon">
        <FontAwesomeIcon className="fave-icon" icon={faHouse} />
      </li>
      <li className="icon">
        <FontAwesomeIcon className="fave-icon" icon={faListCheck} />
      </li>
      <li className="icon">
        <FontAwesomeIcon className="fave-icon" icon={faBriefcase} />
      </li>
    </ul>
  );
}

export default Icons;
