import "./Container.css";

interface ContainerProps extends React.PropsWithChildren {
  title: string;
}

export default function Container({ children, title }: ContainerProps) {
  return (
    <div className="container">
      <div className="container-inner">
        <div className="container-title">
          <h2>{title}</h2>
        </div>
        <div className={`container-content`}>{children}</div>
      </div>
    </div>
  );
}
