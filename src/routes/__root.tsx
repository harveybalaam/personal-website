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
                <ul>
                  <li>
                    <Tab route="/" text="0 index" />
                  </li>
                  <li>
                    <Tab route="/about" text="1 about" />
                  </li>
                  <li>
                    <Tab route="/projects" text="2 projects" />
                  </li>
                  <li>
                    <Tab route="/links" text="3 links" />
                  </li>
                </ul>
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
        <div className="window-row window-row-bordered">
          <span id="vim-mode">-- NORMAL --</span>
        </div>
        <div className="window-row"></div>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({ component: RootLayout });
