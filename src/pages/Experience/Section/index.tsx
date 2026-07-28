import "./Section.css";

interface SectionProps extends React.PropsWithChildren {
  date: string;
  location: string;
  role?: string;
}

export default function Section({
  date,
  children,
  location,
  role,
}: SectionProps) {
  return (
    <div>
      <div className="header">
        {role && (
          <>
            <h4>{role}</h4>
            <span className="divider" />
          </>
        )}
        <h4>{location}</h4>
        <span className="divider" />
        <p className="header-date">{date}</p>
      </div>
      {children}
    </div>
  );
}
