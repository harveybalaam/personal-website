import "./ToolbarAction.css";

interface ToolbarActionProps {
  actionCharacter: string;
  actionName: string;
  value?: string;
}

export default function ToolbarAction({
  actionCharacter,
  actionName,
  value,
}: ToolbarActionProps) {
  return (
    <p>
      <span className="tool-tip-character">{`[${actionCharacter}] `}</span>
      {`${actionName}${value ? " - " + value : ""}`}
    </p>
  );
}
