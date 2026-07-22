import { createFileRoute } from "@tanstack/react-router";
import Hello from "../pages/Hello";

export const Route = createFileRoute("/")({
  component: Hello,
});
