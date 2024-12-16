import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import Packet1 from "../pages/packet1";
import Packet2 from "../pages/packet2";
import Packet3 from "../pages/packet3";
import Regulation from "../pages/regulation";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/packet-elegancy",
		element: <Packet1 />,
	},
	{
		path: "/packet-prestige",
		element: <Packet2 />,
	},
	{
		path: "/packet-bliss",
		element: <Packet3 />,
	},
	{
		path: "/privacy-and-policy",
		element: <Regulation />,
	},
]);

export default Routes;

