import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import linksTitle from "../../assets/images/links-title.svg";
import LinkCard from "./LinkCard";
import "./Links.css";

export default function Links() {
  return (
    <>
      <div className="links-title centered">
        <img
          src={linksTitle}
          alt="ASCII art page title which reads 'More of Me'"
        />
      </div>
      <div className="links-container centered">
        <LinkCard
          description="Connect with me"
          icon={faSquareLinkedin}
          linksTo="https://www.linkedin.com/in/harveybalaam/"
          title="LinkedIn"
        />
        <LinkCard
          icon={faGithub}
          description="Take a look at my personal projects (including this site!)"
          linksTo="https://github.com/harveybalaam"
          title="GitHub"
        />
        <LinkCard
          icon={faGithub}
          description="Here you can find projects I created during my degree"
          linksTo="https://github.com/skiing-gecko"
          title="GitHub (University Profile)"
        />
      </div>
    </>
  );
}
