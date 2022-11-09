import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "~/layouts";
import "~/assets/sass/styles.scss";
import React, { Suspense } from "react";

function App() {
  return (
    <Router>
      <Suspense>
        <div className="App">
          <Routes>
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
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
