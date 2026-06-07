import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { type Project as ProjectProps } from "..";
import "./Project.css";
import Tag from "../../../components/Tag";

export default function Project({
  concepts,
  description,
  isFeatured,
  keyTakeaways,
  link,
  tags,
  technicalDetails,
  title,
}: ProjectProps) {
  const [isCollapsed, setIsCollapsed] = useState(!isFeatured);

  return (
    <div
      className={`container border-default ${isFeatured ? "project-featured" : ""}`}
    >
      <button
        className="project-title"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span className="icon-container icon-container-sm">
          <FontAwesomeIcon
            icon={isCollapsed ? faChevronRight : faChevronDown}
          />
        </span>
        <h4>{title}</h4>
      </button>
      {!isCollapsed && (
        <div className="project-body">
          <div className="tags">
            {tags.map((tag) => (
              <Tag
                key={`${tag.text}-${tag.colour}`}
                colour={tag.colour}
                text={tag.text}
              />
            ))}
          </div>
          <div>
            <h4>Key Concepts</h4>
            <span className="list-details">{concepts.join(" | ")}</span>
          </div>
          <div>
            <h4>Technologies Used</h4>
            <span className="list-details">{technicalDetails.join(" | ")}</span>
          </div>
          <div>
            <h4>Project Overview</h4>
            {description}
          </div>
          <div>
            <h4>Key Takeaways</h4>
            {keyTakeaways}
          </div>
          {link ? (
            <a href={link} target="_blank" className="project-link">
              View Source
            </a>
          ) : (
            <span className="italic-sm">
              Note: this project's source code is not currently public
            </span>
          )}
        </div>
      )}
    </div>
  );
}
