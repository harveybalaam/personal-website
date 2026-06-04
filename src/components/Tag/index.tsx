import "./Tag.css";

interface TagProps {
  text: string;
  colour?: string;
}

export default function Tag({ text, colour }: TagProps) {
  const tagColour = colour ?? "blue";

  return <span className={`tag tag-${tagColour}`}>{text}</span>;
}
