import { Link } from "@tanstack/react-router";
import helloTitle from "../../assets/images/hello-title.svg";
import "./Hello.css";

export default function Hello() {
  return (
    <div className="page-content-wrapper hello-page">
      <div className="hello-title centered">
        <img src={helloTitle} alt="ASCII art page title which reads 'Hello!'" />
      </div>
      <div className="hello-body centered">
        <p>
          Welcome to my personal site! Here you can find general information
          about me, the personal projects I&apos;ve built (and am currently
          building), as well as my professional &amp; educational experience.
          I&apos;ve also included some{" "}
          <Link className="text-link outline-blue" to="/links">
            &lt;links&gt;
          </Link>{" "}
          to other places where you can find out more, such as my LinkedIn and
          GitHub profiles.
          <br />
          <br />
          As you may have noticed, I&apos;ve tried to recreate the vibe of a TUI
          application with this site. My aim is to create something that is not
          just functional, but also enjoyable to interact with. While I&apos;m
          not sure this site will ever be &quot;done&quot;, I hope you feel that
          I am at least heading in that direction! :)
        </p>
        <p id="copyright">&copy; 2026 Harvey Balaam</p>
      </div>
    </div>
  );
}
