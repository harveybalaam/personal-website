import Container from "../../components/Container";
import "./DigitalCV.css";

export default function DigitalCV() {
  return (
    <div className="cv-content-wrapper">
      <div className="cv-content">
        <div className="cv-content-row">
          <Container title="Experience"></Container>
        </div>
        <div className="cv-content-row">
          <Container title="Education"></Container>
          <Container title="Skills & Certifications"></Container>
        </div>
        <div className="cv-content-row">
          <Container title="Volunteer Roles & Other Experience"></Container>
        </div>
      </div>
    </div>
  );
}
