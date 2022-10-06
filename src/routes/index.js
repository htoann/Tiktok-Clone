import React from "react";
import { Route } from "react-router-dom";
import Following from "~/pages/Following";
import Home from "~/pages/Home/Home";
import Live from "~/pages/Live";
import NotFound from "~/pages/NotFound";
import Profile from "~/pages/Profile/Profile";
import Upload from "~/pages/Upload";
import DefaultLayout from "~/layouts/DefaultLayout";

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
      path="/@:nickname"
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
