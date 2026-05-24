import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./SidebarSection.css";

interface SidebarSectionProps {
  iconBefore: IconProp;
  route: string;
  theme: string;
  title: string;
}

export default function SidebarSection({
  iconBefore,
  route,
  theme,
  title,
}: SidebarSectionProps) {
  return (
    <Link
      className={`page-link container section-container ${theme}`}
      to={route}
    >
      <span className="icon-container">
        <FontAwesomeIcon icon={iconBefore} size="lg" />
      </span>
      <h2 className="section-title">{title}</h2>
    </Link>
  );
}
