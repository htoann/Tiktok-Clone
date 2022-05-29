import React from "react";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import { Route } from "react-router-dom";
import DefaultLayout from "~/components/layout/DefaultLayout";

// export const publicRoutes = [
//   { path: "/", component: <Home /> },
//   { path: "/following", component: <Following /> },
// ];

// export const publicRoutes = () => {
//   return (
//     <>
//       <Route path="/" element={<Home />} />
//       <Route path="/following" element={<Following />} />
//     </>
//   );
// };

export const publicRoutes = (
  <>
    <Route
      path="/"
      element={
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      }
    />
    <Route
      path="/following"
      element={
        <DefaultLayout>
          <Following />
        </DefaultLayout>
      }
    />
  </>
);

export const privateRoutes = [];
