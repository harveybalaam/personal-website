import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/digital-cv")({
  component: DigitalCV,
});

// eslint-disable-next-line react-refresh/only-export-components
function DigitalCV() {
  return <div>CV page</div>;
}
