import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading";

const Homepage = React.lazy(() => import("../pages/homepage"));
const Dress = React.lazy(() => import("../pages/dress"));
const Invitation = React.lazy(() => import("../pages/invitation"));
const Packet1 = React.lazy(() => import("../pages/packet1"));
const Packet2 = React.lazy(() => import("../pages/packet2"));
const Packet3 = React.lazy(() => import("../pages/packet3"));

const Routes = createBrowserRouter([
    {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Homepage />
          </Suspense>
        ),
    },
    {
        path: "/packet-classical",
        element: (
          <Suspense fallback={<Loading />}>
            <Packet1 />
          </Suspense>
        ),
    },
    {
        path: "/packet-exquisite",
        element: (
          <Suspense fallback={<Loading />}>
            <Packet2 />
          </Suspense>
        ),
    },
    {
        path: "/packet-opulence",
        element: (
          <Suspense fallback={<Loading />}>
            <Packet3 />
          </Suspense>
        ),
    },
    {
        path: "/dress",
        element: (
          <Suspense fallback={<Loading />}>
            <Dress />
          </Suspense>
        ),
    },
    {
        path: "/invitation",
        element: (
          <Suspense fallback={<Loading />}>
            <Invitation />
          </Suspense>
        ),
    },
]);

export default Routes;
