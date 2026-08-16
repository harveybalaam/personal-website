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
  description: string;
  id: number;
  isFeatured: boolean;
  keyTakeaways: string;
  link?: string;
  tags: Tag[];
  title: string;
  toolsAndConcepts: string[];
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

const projects: Project[] = [
  {
    id: 1,
    title: "gct",
    isFeatured: true,
    tags: [
      { colour: "green", text: "C" },
      { colour: "teal", text: "CLI" },
    ],
    toolsAndConcepts: [
      "Command Line Interfaces",
      "CI/CD Processes",
      "Makefiles",
      "Memory Management",
    ],
    description:
      "gct (for 'git checkout ticket') is a command line tool which helps to streamline the process of checking out git branches that are linked to Jira tickets. It takes a Jira ticket number as an input, then searches both local and remote branches, and checks out the associated branch if one exists. Originally just a small bash script, I decided I wanted to extend its features, and felt it would be a good opportunity to get some more experience writing C. I'm currently extending its features with optional flags, such as for providing a URL to the related Jira ticket, as well as the ability to save user preferences (e.g., the ticket regex pattern, and Jira base URL).",
    keyTakeaways:
      "Working with a lower-level language inevitably makes you think more about what's actually going on behind the scenes of higher-level ones, and I have really enjoyed working with C. I've also used this project as a chance to get some experience with GitHub actions, such as for checking code formatting with clang-format when a PR is raised.",
  },
  {
    id: 2,
    title: "Movie Recommender System",
    isFeatured: false,
    tags: [
      { colour: "yellow", text: "Python" },
      { colour: "orange", text: "ML" },
      { colour: "pink", text: "Data Science" },
      { colour: "blue", text: "TUI" },
    ],
    toolsAndConcepts: [
      "Machine Learning",
      "SVD",
      "Data Cleaning & Analysis",
      "Word2Vec",
      "Collaborative & Content-based Filtering",
    ],
    description:
      "As part of my final-year 'Recommender Systems' university module, I created a hybrid recommender system for suggesting the most likely films a given user would like to watch. It comprises a hybrid (i.e., both collaborative and content-based filtering) recommender, incorporating word2vec to better model the corpus' features. The criteria I chose to evaluate my system were Novelty @k (Kaminskas, 2016), and Mean Reciprocal Rank @k. For my data, I used the MovieLens 32M dataset, with additional data pre-processing/preparation. It also incorporates a TUI to interact with the system and present the generated recommendations.",
    keyTakeaways:
      "Although I interact with recommender systems almost every day, before this module I had never really known how they actually operated under the hood. It was interesting to learn about the theoretical concepts behind creating recommendations, and how we can deal with problems I had never even considered, for example the variance in the range of reviews users give, when determining how to weight each. I also enjoyed the process of building my own system, from dataset selection, data preparation, to model fitting and tuning, as well as evaluation metric selection and calculation. On that note, it also demonstrated to me the value in basing my design choices on strong empirical analysis, especially for systems with so many variables.",
    link: "https://github.com/skiing-gecko/recommender-systems",
  },
  {
    id: 3,
    title: "Personal Website",
    isFeatured: false,
    tags: [
      { colour: "blue", text: "TypeScript" },
      { colour: "purple", text: "AWS" },
      { colour: "red", text: "Frontend" },
    ],
    toolsAndConcepts: [
      "React",
      "TanStack Router",
      "CSS",
      "Storybook",
      "UI Design",
    ],
    description:
      "The site you're currently looking at! I started this primarily because I wanted to get more practice using TypeScript & React, since they are quite integral to the development I do in my work. I have also recently started to interact with a lot more TUI-based applications, and I have become very fond of their flavour of UI. I felt that this site would provide a good outlet for designing such an interface while also building my skills.",
    keyTakeaways:
      "My key takeaways for this one are still in progress! But I've enjoyed setting up my own project from scratch, and look forward to building it up in the future, too. I'd particularly like to add some component tests to the project.",
    link: "https://github.com/harveybalaam/personal-website",
  },
];

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
    <div className="page-content-wrapper projects">
      {hasFeaturedProjects && (
        <>
          <h3 className="featured-projects-header">{`Featured Project${featuredProjects.length > 1 ? "s" : ""}`}</h3>
          {featuredProjects.map((project) => (
            <Project
              key={project.id}
              description={project.description}
              id={project.id}
              isFeatured={project.isFeatured}
              keyTakeaways={project.keyTakeaways}
              link={project.link}
              tags={project.tags}
              title={project.title}
              toolsAndConcepts={project.toolsAndConcepts}
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
            description={project.description}
            id={project.id}
            isFeatured={project.isFeatured}
            keyTakeaways={project.keyTakeaways}
            link={project.link}
            tags={project.tags}
            title={project.title}
            toolsAndConcepts={project.toolsAndConcepts}
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
