import React from "react";
import { Route } from "react-router-dom";
import Following from "~/pages/Following";
import Home from "~/pages/Home/Home";
import Live from "~/pages/Live";
import NotFound from "~/pages/NotFound";
import Profile from "~/pages/Profile/Profile";
import Upload from "~/pages/Upload";
import Defaultlayout from "~/layouts/Defaultlayout";

export const publicRoutes = (
  <>
    <Route
      path="/"
      element={
        <Defaultlayout>
          <Home />
        </Defaultlayout>
      }
    />
    <Route
      path="/following"
      element={
        <Defaultlayout>
          <Following />
        </Defaultlayout>
      }
    />
    <Route
      path="/@:nickname"
      element={
        <Defaultlayout>
          <Profile />
        </Defaultlayout>
      }
    />
    <Route
      path="/live"
      element={
        <Defaultlayout>
          <Live />
        </Defaultlayout>
      }
    />
    <Route path="/upload" element={<Upload />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export const privateRoutes = [];
