import type { MouseEvent } from "react";
import type { Tag } from "../../../pages/PersonalProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./TagRemovable.css";

interface TagRemovableProps extends Tag {
  onRemove: (tagText: Tag["text"]) => void;
}

export default function TagRemovable({
  colour,
  onRemove,
  text,
}: TagRemovableProps) {
  const tagColour = colour ?? "blue";

  const onClick = (event: MouseEvent) => {
    event.stopPropagation();
    onRemove(text);
  };

  return (
    <span className="tag-btn-wrapper">
      <span className={`tag tag-removable tag-${tagColour}`}>{text}</span>
      <button
        className={`tag tag-${tagColour} tag-remove-btn`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faXmark} size="sm" />
      </button>
    </span>
  );
}
