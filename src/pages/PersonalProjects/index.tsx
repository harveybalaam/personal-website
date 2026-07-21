import Project from "./Project";
import Search from "../../components/inputs/Search";
import TagInput from "../../components/inputs/TagInput";
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

const getUniqueTags = (projects: Project[]) => {
  const allTags = projects.map((project) => project.tags).flat();
  const seenTags = new Set();

  return allTags.filter((tag) => {
    if (seenTags.has(tag.text)) {
      return;
    }
    seenTags.add(tag.text);
    return tag;
  });
};

const hasIntersectingElements = (arr1: unknown[], arr2: unknown[]) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return set2.intersection(set1).size > 0;
};

const projects: Project[] = [];

const uniqueTags = getUniqueTags(projects);
const featuredProjects = projects.filter((project) => project.isFeatured);
const hasFeaturedProjects = featuredProjects.length > 0;

export default function PersonalProjects() {
  const [searchValue, setSearchValue] = useState("");
  const [appliedTagFilters, setAppliedTagFilters] = useState<Tag[]>([]);

  const getFilteredProjects = () => {
    const appliedTagNames = appliedTagFilters.map((tag) => tag.text);

    const filteredProjectsByTags =
      appliedTagFilters.length === 0
        ? projects
        : projects.filter((project) =>
            hasIntersectingElements(
              project.tags.map((tag) => tag.text),
              appliedTagNames,
            ),
          );

    return filteredProjectsByTags.filter(
      (project) =>
        !project.isFeatured &&
        project.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  };

  const filteredProjects = getFilteredProjects();

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
        <TagInput
          selectedTags={appliedTagFilters}
          setSelectedTags={setAppliedTagFilters}
          tags={uniqueTags}
        />
      </div>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
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
        ))
      ) : (
        <div className="centered">
          <p>No projects matched your search criteria</p>
        </div>
      )}
    </div>
  );
}
