import {
  faBook,
  faCode,
  faHouse,
  faInfo,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import SidebarSection from "../components/Sidebar/SidebarSection";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  const [pageTitle, setPageTitle] = useState("Hello");
  return (
    <div className="main-content">
      <Sidebar title="Pages">
        <SidebarSection
          iconBefore={faHouse}
          route="/"
          selected={true}
          setPageTitle={setPageTitle}
          title="Hello"
        />
        <SidebarSection
          iconBefore={faInfo}
          route="/about"
          selected={false}
          setPageTitle={setPageTitle}
          title="About Me"
        />
        <SidebarSection
          iconBefore={faCode}
          route="/projects"
          selected={false}
          setPageTitle={setPageTitle}
          title="Personal Projects"
        />
        <SidebarSection
          iconBefore={faBook}
          route="/digital-cv"
          selected={false}
          setPageTitle={setPageTitle}
          title="Digital CV"
        />
        <SidebarSection
          iconBefore={faLink}
          route="/links"
          selected={false}
          setPageTitle={setPageTitle}
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
