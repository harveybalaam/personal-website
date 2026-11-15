import "./index-page.css";
import { CommandLine } from "../../components/command-line";
import Container from "../../components/Container";

export function Index() {
  return (
    <div id="index-content">
      <Container title="whoami">
        <div></div>
      </Container>
      <div>
        <CommandLine command="bat index.txt" />
      </div>
    </div>
  );
}
