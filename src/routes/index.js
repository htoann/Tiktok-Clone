import React from "react";
import { Route } from "react-router-dom";
import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Live from "~/pages/Live";
import NotFound from "~/pages/NotFound";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import { config } from "~/config";
import DefaultLayout from "~/layouts";
import Messages from "~/pages/Messages";
import HeaderOnly from "~/layouts/HeaderOnly";
import Login from "~/pages/Login/Login";
import Register from "~/pages/Register/Register";

export const publicRoutes = (
  <>
    {console.log(config.routes.login)}
    <Route
      path={config.routes.home}
      element={
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      }
    />
    <Route
      path={config.routes.following}
      element={
        <DefaultLayout>
          <Following />
        </DefaultLayout>
      }
    />
    <Route
      path={config.routes.profile}
      element={
        <DefaultLayout>
          <Profile />
        </DefaultLayout>
      }
    />
    <Route
      path={config.routes.live}
      element={
        <DefaultLayout>
          <Live />
        </DefaultLayout>
      }
    />
    <Route
      path={config.routes.messages}
      element={
        <HeaderOnly>
          <Messages />
        </HeaderOnly>
      }
    />
    <Route
      path={config.routes.upload}
      element={
        <HeaderOnly>
          <Upload />
        </HeaderOnly>
      }
    />
    <Route path={config.routes.login} element={<Login />} />
    <Route path={config.routes.register} element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export const privateRoutes = [];
