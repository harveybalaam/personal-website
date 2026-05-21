import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./SidebarSection.css";

interface SidebarSectionProps {
  iconBefore: IconProp;
  route: string;
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}

export default function SidebarSection({
  iconBefore,
  route,
  setPageTitle,
  title,
}: SidebarSectionProps) {
  const handleClick = () => {
    setPageTitle(title);
  };

  return (
    <Link
      className="page-link container section-container"
      to={route}
      onClick={handleClick}
    >
      <span className="icon-container">
        <FontAwesomeIcon icon={iconBefore} size="lg" />
      </span>
      <h2 className="section-title">{title}</h2>
    </Link>
  );
}
