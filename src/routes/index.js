import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "~/layout/DefaultLayout";
import Following from "~/pages/Following";
import Home from "~/pages/Home/Home";
import Live from "~/pages/Live";
import NotFound from "~/pages/NotFound";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

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
    <Route
      path="/profile"
      element={
        <DefaultLayout>
          <Profile />
        </DefaultLayout>
      }
    />
    <Route
      path="/live"
      element={
        <DefaultLayout>
          <Live />
        </DefaultLayout>
      }
    />
    <Route path="/upload" element={<Upload />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export const privateRoutes = [];
