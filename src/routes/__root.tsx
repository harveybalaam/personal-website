import { Outlet, createRootRoute } from "@tanstack/react-router";
import Container from "../components/Container";
import { Tab } from "../components/tab";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function RootLayout() {
  return (
    <>
      <div id="root-window">
        <div className="window-row window-row-bordered">
          <header>
            <h1 className="sr-only">Harvey Balaam</h1>
            <div>
              <span className="text-highlight">/Users/harveybalaam</span>
              <nav className="tab-group">
                <Tab route="/" text="0 index" />
                <Tab route="/about" text="1 about" />
                <Tab route="/projects" text="2 projects" />
                <Tab route="/links" text="3 links" />
              </nav>
            </div>
            <span className="text-emphasis">harveybalaam.com</span>
          </header>
        </div>
        <main className="window-row window-row-bordered">
          <section id="page-content">
            <Outlet />
          </section>
          <section id="system-panel">
            <Container title="system" />
          </section>
        </main>
        <div className="window-row window-row-bordered"></div>
        <div className="window-row"></div>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({ component: RootLayout });
