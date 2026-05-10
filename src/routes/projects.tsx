import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

// eslint-disable-next-line react-refresh/only-export-components
function Projects() {
  return <div>Projects page</div>;
}
