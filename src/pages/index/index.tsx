import "./index-page.css";
import { CommandLine } from "../../components/command-line";
import Container from "../../components/Container";

export function Index() {
  return (
    <div className="index-content">
      <Container title="whoami">
        <div className="whoami">
          <div>
            <h3>profile</h3>
            <dl className="profile">
              <dt className="text-highlight">role</dt>
              <dd>junior developer</dd>
              <dt className="text-highlight">location</dt>
              <dd>manchester, uk</dd>
              <dt className="text-highlight">working with</dt>
              <dd>ts &amp; js, react, aws, mongodb</dd>
              <dt className="text-highlight">interests</dt>
              <dd>cloud infra, a11y, mobile dev</dd>
            </dl>
          </div>
          <div></div>
          <div></div>
        </div>
      </Container>
      <div className="command-line-row">
        <CommandLine command="bat index.txt" />
      </div>
      <div className="command-line-row">
        <CommandLine command="ls featured-projects" />
        <ul className="featured-projects">
          <li>
            <a
              href="https://github.com/harveybalaam/distinct-favicons"
              target="_blank"
            >
              distinct-favicons
            </a>
          </li>
          <li>
            <a href="https://github.com/harveybalaam/rigatoni" target="_blank">
              rigatoni
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
