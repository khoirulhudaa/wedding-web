import { createBrowserRouter } from "react-router-dom";
import Dress from "../pages/dress";
import Homepage from "../pages/homepage";
import Invitation from "../pages/invitation";
import Packet1 from "../pages/packet1";
import Packet2 from "../pages/packet2";
import Packet3 from "../pages/packet3";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/packet-classical",
        element: <Packet1 />,
    },
    {
        path: "/packet-exquisite",
        element: <Packet2 />,
    },
    {
        path: "/packet-opulence",
        element: <Packet3 />,
    },
    {
        path: "/dress",
        element: <Dress />,
    },
    {
        path: "/invitation",
        element: <Invitation />,
    },
]);

export default Routes;
