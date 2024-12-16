import { RouterProvider } from "react-router-dom";
import React from "react";
import Routes from "./routes";

function App() {
    return (
        <React.Fragment>
            <RouterProvider router={Routes} />
        </React.Fragment>
    );
}

export default App;
