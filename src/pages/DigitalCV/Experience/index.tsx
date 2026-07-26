interface ExperienceProps extends React.PropsWithChildren {
  date: string;
  location: string;
  role?: string;
}

export default function Experience({
  date,
  children,
  location,
  role,
}: ExperienceProps) {
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
