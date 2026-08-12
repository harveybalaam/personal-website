import Container from "../../components/Container";
import aboutTitle from "../../assets/images/about-title.svg";
import "./About.css";

export default function About() {
  return (
    <div className="page-content-wrapper about-page">
      <div className="about-title centered">
        <img
          src={aboutTitle}
          alt="ASCII art page title which reads 'About Me'"
        />
      </div>
      <div className="about-body">
        <Container title="A Bit About Me">
          <div>
            <h4 className="about-subheading">whoami</h4>
            <p>
              I'm a junior developer in the Manchester area, working primarily
              in TypeScript and JavaScript, across the full stack. I'm also a
              recent First Class graduate from Durham University, where I
              studied Computer Science.
            </p>
          </div>
          <div>
            <h4 className="about-subheading">Goals &amp; Interests</h4>
            <p>
              My primary goal is to build software that&apos;s robust,
              accessible, and enjoyable to use. I&apos;m interested in learning
              more about good UI/UX design principles and best practices, and
              how they can shape the interfaces, interactions, and user flows I
              build. For my next personal project, I&apos;d also like to try out
              mobile development, to see what I can create, and what new
              challenges I&apos;ll face working with a different medium to what
              I&apos;m comfortable with.
            </p>
            <br />
            <p>
              On the backend side, I enjoy working with and learning more about
              cloud infrastructure and cloud computing solutions, and would like
              to build some of my own serverless services. As a part of this,
              I&apos;m currently working towards the AWS Cloud Practitioner
              certification.
            </p>
            <br />
            <p>
              I also enjoy learning about CI/CD processes, and am trying to
              incorporate them more into my personal projects, such as by
              setting up automated workflows via Actions in my GitHub
              repositories.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
