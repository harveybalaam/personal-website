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
      <div>
        <CommandLine command="bat index.txt" />
      </div>
    </div>
  );
}
