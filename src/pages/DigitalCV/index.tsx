import Container from "../../components/Container";
import Experience from "./Experience";
import "./DigitalCV.css";

export default function DigitalCV() {
  return (
    <div className="cv-content-wrapper">
      <div className="cv-content">
        <div className="cv-content-row">
          <Container title="Experience">
            <div className="cv-content-section">
              <Experience
                date="Dec 2025 - present"
                location="Pimberly"
                role="Junior Developer"
              ></Experience>
              <Experience
                date="Oct 2024 - Jun 2025"
                location="Durham University"
                role="Demonstrator"
              ></Experience>
            </div>
          </Container>
        </div>
        <div className="cv-content-row">
          <Container title="Education">
            <div className="cv-content-section">
              <Experience
                date="Oct 2022 - Jul 2025"
                location="Durham University"
              ></Experience>
              <Experience
                date="Sep 2019 - Jul 2021"
                location="Brine Leas Sixth Form"
              ></Experience>
            </div>
          </Container>
          <Container title="Skills & Certifications">
            <div className="cv-content-section"></div>
          </Container>
        </div>
        <div className="cv-content-row">
          <Container title="Volunteer Roles & Other Experience">
            <div className="cv-content-section">
              <Experience
                date="Oct 2022 - Jun 2025"
                location="Durham Students' Union"
                role="Course Representative"
              ></Experience>
              <Experience
                date="May 2023 - Nov 2024"
                location="St Aidan's JCR CIO, Durham University"
                role="Tech Chair"
              ></Experience>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
