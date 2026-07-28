import "./Container.css";

interface ContainerProps extends React.PropsWithChildren {
  isSidebar?: boolean;
  title: string;
}

export default function Container({ children, isSidebar = false, title }: ContainerProps) {
  const sidebarClassModifier = isSidebar ? " sidebar" : "";

  return (
    <div className={`container border-default${sidebarClassModifier}`}>
      <div className="container-inner">
        <div className="container-title">
          <h3>{title}</h3>
        </div>
        <div className={`container-content${sidebarClassModifier}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
