import React from "react";
import { Route } from "react-router-dom";
import Following from "~/pages/Following";
import Home from "~/pages/Home/Home";
import Live from "~/pages/Live";
import NotFound from "~/pages/NotFound";
import Profile from "~/pages/Profile/Profile";
import Upload from "~/pages/Upload";
import { Defaultlayouts } from "~/layouts/Defaultlayout";

export const publicRoutes = (
  <>
    <Route
      path="/"
      element={
        <Defaultlayouts>
          <Home />
        </Defaultlayouts>
      }
    />
    <Route
      path="/following"
      element={
        <Defaultlayouts>
          <Following />
        </Defaultlayouts>
      }
    />
    <Route
      path="/@:nickname"
      element={
        <Defaultlayouts>
          <Profile />
        </Defaultlayouts>
      }
    />
    <Route
      path="/live"
      element={
        <Defaultlayouts>
          <Live />
        </Defaultlayouts>
      }
    />
    <Route path="/upload" element={<Upload />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export const privateRoutes = [];
