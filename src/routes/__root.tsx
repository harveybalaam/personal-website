import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Tab } from "../components/tab";

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  return (
    <>
      <div id="root-window">
        <div className="window-row window-row-bordered">
          <header>
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
        <div className="window-row window-row-bordered"></div>
        <div className="window-row window-row-bordered"></div>
        <div className="window-row"></div>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({ component: RootLayout });
