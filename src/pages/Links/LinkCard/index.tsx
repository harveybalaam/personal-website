import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./LinkCard.css";

interface LinkCardProps {
  description: string;
  icon: IconProp;
  linksTo: string;
  title: string;
}

export default function LinkCard({
  description,
  icon,
  linksTo,
  title,
}: LinkCardProps) {
  return (
    <a className="link-card" target="_blank" href={linksTo}>
      <span className="link-card-icon icon-container icon-container-lg">
        <FontAwesomeIcon icon={icon} size="2xl" />
      </span>
      <div className="link-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
