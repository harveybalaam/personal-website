import "./tab.css";
import { Link, useLocation } from "@tanstack/react-router";

interface TabProps {
  route: "/" | "/about" | "/links" | "/projects";
  text: string;
}

export function Tab({ route, text }: TabProps) {
  const location = useLocation();
  const isActiveTab = location.pathname === route;
  let className = "tab-link";

  if (isActiveTab) {
    className += " tab-link-active";
  }

  return (
    <Link className={className} to={route}>
      {text}
    </Link>
  );
}
