import { Link } from "@tanstack/react-router";
import helloTitle from "../../assets/images/hello-title.svg";
import "./Hello.css";

export default function Hello() {
  return (
    <>
      <div className="hello-title centered">
        <img src={helloTitle} alt="ASCII art page title which reads 'Hello!'" />
      </div>
      <div className="hello-body centered">
        <p>Welcome to my personal site! Here you can find information about me, any personal projects I've built (and am currently building), as well as my professional &amp; educational experience. I've also included some <Link className="text-link outline-blue" to="/links">&lt;links&gt;</Link> to other places where you can find out more, such as LinkedIn and GitHub.<br /><br />I've tried to recreate the vibe of a TUI application with this site. My main goal was to create something that is not just functional but also enjoyable to interact with, and I hope I have succeded in that! :)</p>
      </div>
    </>
  );
}
