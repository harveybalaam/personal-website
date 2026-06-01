import {
  faBook,
  faCode,
  faHouse,
  faInfo,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import SidebarSection from "../components/Sidebar/SidebarSection";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";

const convertPathnameToTitle = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "Hello";
    case "/about":
      return "About Me";
    case "/projects":
      return "Personal Projects";
    case "/digital-cv":
      return "Digital CV";
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
      <Sidebar title="Pages">
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
          theme="green"
          title="Personal Projects"
        />
        <SidebarSection
          iconBefore={faBook}
          route="/digital-cv"
          theme="yellow"
          title="Digital CV"
        />
        <SidebarSection
          iconBefore={faLink}
          route="/links"
          theme="purple"
          title="Links"
        />
      </Sidebar>
      <div className="container page">
        <div className="container-inner">
          <div className="container-title">
            <h3>{pageTitle}</h3>
          </div>
          <div className="container-content">
            <Outlet />
          </div>
        </div>
      </div>
      <Toolbar />
      <TanStackRouterDevtools />
    </div>
  );
}

export const Route = createRootRoute({ component: RootLayout });
