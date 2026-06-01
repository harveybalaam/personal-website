import { createFileRoute } from "@tanstack/react-router";
import Links from "../pages/Links";

export const Route = createFileRoute("/links")({
  component: Links,
});
