import { RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import Routes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <React.Fragment>
            <RouterProvider router={Routes} />
        </React.Fragment>
    );
};

export default App;
