import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Toolbar.css";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <div>
        <p>/Users/harvey/projects/personal-website</p>
      </div>
      <a
        className="link"
        target="_blank"
        href="https://github.com/harveybalaam/personal-website"
      >
        <p>view source on GitHub</p>
        <span className="icon-container icon-container-sm">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </span>
      </a>
    </div>
  );
}
