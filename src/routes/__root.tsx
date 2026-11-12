import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  return (
    <>
      <div id="root-window">
        <div className="window-row window-row-bordered"></div>
        <div className="window-row window-row-bordered"></div>
        <div className="window-row window-row-bordered"></div>
        <div className="window-row"></div>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({ component: RootLayout });
