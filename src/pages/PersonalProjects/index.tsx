import Project from "./Project";
import Search from "../../components/inputs/Search";
import { useState } from "react";
import "./PersonalProjects.css";

export interface Tag {
  colour?:
    | "orange"
    | "red"
    | "pink"
    | "purple"
    | "blue"
    | "teal"
    | "green"
    | "yellow";
  text: string;
}

export interface Project {
  concepts: string[];
  description: string;
  id: number;
  isFeatured: boolean;
  keyTakeaways: string;
  link?: string;
  tags: Tag[];
  technicalDetails: string[];
  title: string;
}

const projects: Project[] = [];

export default function PersonalProjects() {
  const [searchValue, setSearchValue] = useState("");

  const featuredProjects = projects.filter((project) => project.isFeatured);
  const hasFeaturedProjects = featuredProjects.length > 0;

  return (
    <div className="projects">
      {hasFeaturedProjects && (
        <>
          <h3 className="featured-projects-header">{`Featured Project${featuredProjects.length > 1 ? "s" : ""}`}</h3>
          {featuredProjects.map((project) => (
            <Project
              key={project.id}
              concepts={project.concepts}
              description={project.description}
              id={project.id}
              isFeatured={project.isFeatured}
              keyTakeaways={project.keyTakeaways}
              link={project.link}
              tags={project.tags}
              technicalDetails={project.technicalDetails}
              title={project.title}
            />
          ))}
        </>
      )}
      <h3>All Projects</h3>
      <div className="projects-search-filter">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {projects
        .filter(
          (project) =>
            !project.isFeatured &&
            project.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .map((project) => (
          <Project
            key={project.id}
            concepts={project.concepts}
            description={project.description}
            id={project.id}
            isFeatured={project.isFeatured}
            keyTakeaways={project.keyTakeaways}
            link={project.link}
            tags={project.tags}
            technicalDetails={project.technicalDetails}
            title={project.title}
          />
        ))}
    </div>
  );
}
