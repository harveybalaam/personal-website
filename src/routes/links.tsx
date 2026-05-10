import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/links")({
  component: Links,
});

// eslint-disable-next-line react-refresh/only-export-components
function Links() {
  return <div>Links page</div>;
}
