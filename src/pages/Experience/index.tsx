import Container from "../../components/Container";
import Section from "./Section";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="cv-content-wrapper">
      <div className="cv-content">
        <div className="cv-content-row">
          <Container title="Roles">
            <div className="cv-content-section">
              <Section
                date="Dec 2025 - present"
                location="Pimberly"
                role="Junior Developer"
              ></Section>
              <Section
                date="Oct 2024 - Jun 2025"
                location="Durham University"
                role="Demonstrator"
              ></Section>
            </div>
          </Container>
        </div>
        <div className="cv-content-row">
          <Container title="Education">
            <div className="cv-content-section">
              <Section
                date="Oct 2022 - Jul 2025"
                location="Durham University"
              ></Section>
              <Section
                date="Sep 2019 - Jul 2021"
                location="Brine Leas Sixth Form"
              ></Section>
            </div>
          </Container>
          <Container title="Skills & Certifications">
            <div className="cv-content-section"></div>
          </Container>
        </div>
        <div className="cv-content-row">
          <Container title="Volunteer Roles & Other Experience">
            <div className="cv-content-section">
              <Section
                date="Oct 2022 - Jun 2025"
                location="Durham Students' Union"
                role="Course Representative"
              ></Section>
              <Section
                date="May 2023 - Nov 2024"
                location="St Aidan's JCR CIO, Durham University"
                role="Tech Chair"
              ></Section>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
