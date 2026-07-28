import {
  faBook,
  faCode,
  faHouse,
  faInfo,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Container from "../components/Container";
import SidebarSection from "../components/Sidebar/SidebarSection";
import Toolbar from "../components/Toolbar";

const convertPathnameToTitle = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "Hello";
    case "/about":
      return "About Me";
    case "/projects":
      return "Personal Projects";
    case "/experience":
      return "Experience";
    case "/links":
      return "Links";
    default:
      return "Hello";
  }
};

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  const location = useLocation();
  const pageTitle = convertPathnameToTitle(location.pathname);

  return (
    <div className="main-content">
      <Container title="Pages" isSidebar>
        <SidebarSection
          iconBefore={faHouse}
          route="/"
          theme="blue"
          title="Hello"
        />
        <SidebarSection
          iconBefore={faInfo}
          route="/about"
          theme="pink"
          title="About Me"
        />
        <SidebarSection
          iconBefore={faCode}
          route="/projects"
          theme="orange"
          title="Personal Projects"
        />
        <SidebarSection
          iconBefore={faBook}
          route="/experience"
          theme="yellow"
          title="Experience"
        />
        <SidebarSection
          iconBefore={faLink}
          route="/links"
          theme="purple"
          title="Links"
        />
      </Container>
      <Container title={pageTitle}>
        <Outlet />
      </Container>
      <Toolbar />
      <TanStackRouterDevtools />
    </div>
  );
}

export const Route = createRootRoute({ component: RootLayout });
