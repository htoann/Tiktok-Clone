import { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "~/layouts";
import "~/assets/sass/styles.scss";
import React, { Suspense } from "react";
import ModalVideo from "./pages/ModalVideo/ModalVideo";
import { config } from "~/config";
import Loader from "./components/Core/Loader";

function App() {
  const location = useLocation();
  const videoDetail = location.state && location.state.videoDetail;

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
