import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  return (
    <>
      <Sidebar title="">
        <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
        <Link to="/digital-cv">CV</Link> <Link to="/projects">Projects</Link>{" "}
        <Link to="/links">Links</Link>{" "}
      </Sidebar>
      <Outlet />
      <Toolbar />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({ component: RootLayout });
