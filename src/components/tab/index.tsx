import { Link, useLocation } from "@tanstack/react-router";
import "./tab.css";

interface TabProps {
  route: "/" | "/about" | "/links" | "/projects";
  text: string;
}

export function Tab({ route, text }: TabProps) {
  const location = useLocation();
  const isActiveTab = location.pathname === route;

  return (
    <Link
      className={`tab-link ${isActiveTab ? "tab-link-active" : ""}`}
      to={route}
    >
      {text}
    </Link>
  );
}
