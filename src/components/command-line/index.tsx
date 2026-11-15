import "./command-line.css";

interface CommandLineProps {
  command: string;
}

export function CommandLine({ command }: CommandLineProps) {
  const executionTime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="command-line">
      <span>
        <span className="text-highlight">~ % </span>
        {command}
      </span>
      <span>{executionTime}</span>
    </div>
  );
}
