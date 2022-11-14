import { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { DefaultLayout } from "~/layouts";
import "~/assets/sass/styles.scss";
import React, { Suspense } from "react";
import ModalVideo from "./pages/ModalVideo/ModalVideo";
import { config } from "~/config";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Loader from "./components/Core/Loader";

function App() {
  const location = useLocation();
  const videoDetail = location.state && location.state.videoDetail;
  const { user } = useSelector((state) => state.user);

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes location={videoDetail || location}>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <ProtectedRoute user={user}>
                      <Page />
                    </ProtectedRoute>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        {videoDetail && (
          <Routes>
            <Route exact path={config.routes.video} element={<ModalVideo />} />
          </Routes>
        )}
      </Suspense>
    </div>
  );
}

export default App;
