import type { KeyboardEvent, MouseEvent } from "react";
import type { Tag } from "../../../pages/PersonalProjects";
import "./TagButton.css";

interface TagButtonProps extends Tag {
  handleClick: (tagText: Tag["text"]) => void;
  handleKeyDown: (tagText: Tag["text"], key: KeyboardEvent["key"]) => void;
}

export default function TagButton({
  colour,
  handleClick,
  handleKeyDown,
  text,
}: TagButtonProps) {
  const tagColour = colour ?? "blue";

  const onClick = (event: MouseEvent) => {
    event.stopPropagation();
    handleClick(text);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
    handleKeyDown(text, event.key);
  };

  return (
    <button
      className={`tag tag-btn tag-${tagColour}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {text}
    </button>
  );
}
