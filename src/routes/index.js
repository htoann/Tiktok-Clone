import React from "react";
import { Route } from "react-router-dom";
import Following from "~/pages/Following";
import Home from "~/pages/Home/Home";
import Live from "~/pages/Live";
import NotFound from "~/pages/NotFound";
import Profile from "~/pages/Profile/Profile";
import Upload from "~/pages/Upload";
import DefaultLayout from "~/layouts/DefaultLayout";
import { routes } from "~/config/routes";

export const publicRoutes = (
  <>
    <Route
      path={routes.home}
      element={
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      }
    />
    <Route
      path={routes.following}
      element={
        <DefaultLayout>
          <Following />
        </DefaultLayout>
      }
    />
    <Route
      path={routes.profile}
      element={
        <DefaultLayout>
          <Profile />
        </DefaultLayout>
      }
    />
    <Route
      path={routes.live}
      element={
        <DefaultLayout>
          <Live />
        </DefaultLayout>
      }
    />
    <Route path={routes.upload} element={<Upload />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export const privateRoutes = [];
