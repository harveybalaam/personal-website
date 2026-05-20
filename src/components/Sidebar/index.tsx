import "./Sidebar.css";

interface SidebarProps extends React.PropsWithChildren {
  title: string;
}

export default function Sidebar({ children, title }: SidebarProps) {
  return (
    <div className="container sidebar">
      <div className="container-inner">
        <div className="container-title">
          <h3>{title}</h3>
        </div>
        <div className="container-content sidebar">{children}</div>
      </div>
    </div>
  );
}
