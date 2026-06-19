import type { MouseEvent } from "react";
import type { Tag } from "../../pages/PersonalProjects";
import "./TagButton.css";

interface TagButtonProps extends Tag {
  handleClick: (tagText: Tag["text"]) => void;
}

export default function TagButton({
  colour,
  handleClick,
  text,
}: TagButtonProps) {
  const tagColour = colour ?? "blue";

  const onClick = (event: MouseEvent) => {
    event.stopPropagation();
    handleClick(text);
  };

  return (
    <button className={`tag tag-btn tag-${tagColour}`} onClick={onClick}>
      {text}
    </button>
  );
}
