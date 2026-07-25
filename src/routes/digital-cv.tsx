import { createFileRoute } from "@tanstack/react-router";
import DigitalCV from "../pages/DigitalCV";

export const Route = createFileRoute("/digital-cv")({
  component: DigitalCV,
});
