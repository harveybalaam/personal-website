import Container from "../../components/Container";
import Section from "./Section";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="page-content-wrapper">
      <div className="cv-content">
        <div className="cv-content-row">
          <Container title="Roles">
            <div className="cv-content-section">
              <Section
                date="Dec 2025 - present"
                location="Pimberly"
                role="Junior Developer"
              >
                <ul>
                  <li>
                    &#x251C;&#x2500;{" "}
                    <span className="highlighted-yellow">TypeScript</span> &amp;
                    <span className="highlighted-yellow"> JavaScript</span>{" "}
                    across the full stack, including{" "}
                    <span className="highlighted-yellow">React</span> and
                    Next.js on the frontend
                  </li>
                  <li>
                    <li>
                      &#x251C;&#x2500; Experience working across the full SDLC
                    </li>
                  </li>
                  <li>
                    &#x251C;&#x2500; Contribute to, and work with, cloud
                    infrastructure [
                    <span className="highlighted-yellow">AWS</span>]
                    <ul>
                      <li>
                        &#x251C;&#x2500;&#x2500;&#x2500;&#x2500; Familiar with
                        services including <strong>ECS</strong>,{" "}
                        <strong>S3</strong>, <strong>Lambda</strong>,{" "}
                        <strong>SQS</strong>, <strong>KMS</strong>, &amp;{" "}
                        <strong>IAM</strong>
                      </li>
                    </ul>
                  </li>
                  <li>
                    &#x2514;&#x2500; Exposure to{" "}
                    <span className="highlighted-yellow">CI/CD</span> pipelines
                  </li>
                </ul>
              </Section>
              <Section
                date="Oct 2024 - Jun 2025"
                location="Durham University"
                role="Demonstrator"
              >
                <ul>
                  <li>
                    &#x251C;&#x2500; Co-led weekly practical sessions for
                    students studying COMP1071: Computer Systems
                    <ul>
                      <li>
                        &#x251C;&#x2500;&#x2500;&#x2500;&#x2500; Topics included{" "}
                        <strong>Digital Electronics</strong>,{" "}
                        <strong>Operating Systems</strong>,{" "}
                        <strong>Machine Architecture</strong>, and{" "}
                        <strong>Databases</strong>
                      </li>
                    </ul>
                  </li>
                  <li>
                    &#x251C;&#x2500; Presented and walked through problem sets
                    to reinforce lecture learning
                  </li>
                  <li>
                    &#x2514;&#x2500; Helped students decompose problems,
                    offering guidance as needed, enabling them to discover
                    solutions
                  </li>
                </ul>
              </Section>
            </div>
          </Container>
        </div>
        <div className="cv-content-row">
          <Container title="Education">
            <div className="cv-content-section">
              <Section date="Oct 2022 - Jul 2025" location="Durham University">
                <ul>
                  <li>
                    &#x251C;&#x2500; Computer Science, BSc [
                    <span className="highlighted-yellow">
                      First Class Honours
                    </span>
                    ]
                  </li>
                  <li>
                    &#x2514;&#x2500;{" "}
                    <span className="highlighted-yellow">
                      Outstanding Contribution Prize
                    </span>{" "}
                    winner
                  </li>
                </ul>
              </Section>
              <Section
                date="Sep 2019 - Jul 2021"
                location="Brine Leas Sixth Form"
              >
                <ul>
                  <li>
                    &#x251C;&#x2500; Mathematics [
                    <span className="highlighted-yellow">A*</span>]
                  </li>
                  <li>
                    &#x251C;&#x2500; Further Mathematics [
                    <span className="highlighted-yellow">A*</span>]
                  </li>
                  <li>
                    &#x251C;&#x2500; Physics [
                    <span className="highlighted-yellow">A*</span>]
                  </li>
                  <li>
                    &#x251C;&#x2500; Computer Science [
                    <span className="highlighted-yellow">A*</span>]
                  </li>
                  <li>
                    &#x2514;&#x2500; Advanced Extension Award in Mathematics [
                    <span className="highlighted-yellow">Merit</span>]
                  </li>
                </ul>
              </Section>
            </div>
          </Container>
          <Container title="Skills & Certifications">
            <div className="cv-content-section">
              <div>
                <h4>Languages</h4>
                <p>TypeScript, JavaScript, Python, C, C++, C#, Haskell</p>
                <br />
                <h4>Frameworks, Platforms &amp; Other Skills</h4>
                <p>
                  React, Docker, Git, AWS, GCP, MongoDB, Node.js, Express,
                  Flask, Vitest, Jest, Pytest, API Clients [Yaak, Postman]
                </p>
              </div>
              <div>
                <h4>Certifications</h4>
                <ul>
                  <li>&#x2514;&#x2500; IBM Python for Data Science</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div className="cv-content-row">
          <Container title="Volunteer Roles & Other Experience">
            <div className="cv-content-section">
              <Section
                date="Oct 2022 - Jun 2025"
                location="Durham Students' Union"
                role="Course Representative"
              >
                <ul>
                  <li>
                    &#x251C;&#x2500; Collected and reported students' course
                    feedback through meetings with department leaders
                    <ul>
                      <li>
                        &#x251C;&#x2500;&#x2500;&#x2500;&#x2500; Contributing to
                        the restructuring of multiple modules' delivery &amp;
                        assessment
                      </li>
                    </ul>
                  </li>
                  <li>
                    &#x251C;&#x2500; Collaborated with the University's
                    Computing Society to set up a new line of communication for
                    feedback
                  </li>
                  <li>
                    &#x2514;&#x2500;{" "}
                    <span className="highlighted-yellow">
                      Promoted to Co-Chair
                    </span>{" "}
                    of the Student Voice Committee in my final year
                  </li>
                </ul>
              </Section>
              <Section
                date="May 2023 - Nov 2024"
                location="St Aidan's JCR CIO, Durham University"
                role="Tech Chair"
              >
                <ul>
                  <li>
                    &#x251C;&#x2500; Chaired the St Aidan's Junior Common Room
                    Technology Committee
                  </li>
                  <li>
                    &#x251C;&#x2500; Managed the JCR's website content and
                    hosting
                  </li>
                  <li>
                    &#x251C;&#x2500; Planned, setup, and helped supervise
                    audiovisual equipment for JCR events
                    <ul>
                      <li>
                        &#x2514;&#x2500;&#x2500;&#x2500;&#x2500; Including
                        coordinating with local businesses for our largest
                        events
                      </li>
                    </ul>
                  </li>
                </ul>
              </Section>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
