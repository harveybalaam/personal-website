import "./Sidebar.css";

type SidebarProps = React.PropsWithChildren & {
  title: string;
};

export default function Sidebar({ children, title }: SidebarProps) {
  return <>{children}</>;
}
