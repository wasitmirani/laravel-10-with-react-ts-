import React from 'react';
import { RouteObject, useRoutes } from "react-router-dom";
import routes from "./routes/router";


function App() {
    const appRoutes = useRoutes(routes);
  return (
    <div>

{appRoutes}

    </div>

  );
}

export default App;