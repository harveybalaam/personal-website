import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ToolbarAction from "./ToolbarAction";
import "./Toolbar.css";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <div>
        <p>/Users/harvey/projects/personal-website</p>
      </div>
      <div className="tool-tips">
        <ToolbarAction actionCharacter="o" actionName="options" />
        <ToolbarAction actionCharacter="s" actionName="sound" value="off" />
        <ToolbarAction actionCharacter="t" actionName="theme" value="dark" />
      </div>
      <a
        className="link"
        target="_blank"
        href="https://github.com/harveybalaam"
      >
        <p>view source on GitHub</p>
        <span className="icon-container icon-container-sm">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </span>
      </a>
    </div>
  );
}
