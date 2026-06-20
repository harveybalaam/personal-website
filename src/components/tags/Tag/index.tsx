import type { Tag as TagProps } from "../../../pages/PersonalProjects";
import "./Tag.css";

export default function Tag({ text, colour }: TagProps) {
  const tagColour = colour ?? "blue";

  return <span className={`tag tag-${tagColour}`}>{text}</span>;
}
