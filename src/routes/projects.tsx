import { createFileRoute } from "@tanstack/react-router";
import PersonalProjects from "../pages/PersonalProjects";

export const Route = createFileRoute("/projects")({
  component: PersonalProjects,
});
