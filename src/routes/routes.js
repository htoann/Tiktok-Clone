import { lazy } from "react";
import { config } from "~/config";

// Layouts
const ModalVideo = lazy(() => import("~/pages/ModalVideo"));
import { HeaderOnly } from "~/layouts";

// Pages
const Following = lazy(() => import("~/pages/Following"));
const Home = lazy(() => import("~/pages/Home"));
const Live = lazy(() => import("~/pages/Live"));
const NotFound = lazy(() => import("~/pages/NotFound"));
const Profile = lazy(() => import("~/pages/Profile"));
const Upload = lazy(() => import("~/pages/Upload"));
const Login = lazy(() => import("~/pages/Login"));
const Register = lazy(() => import("~/pages/Register"));

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.live, component: Live },
  { path: config.routes.login, component: Login, layout: HeaderOnly },
  { path: config.routes.register, component: Register, layout: HeaderOnly },
  {
    path: config.routes.video,
    component: ModalVideo,
    layout: HeaderOnly,
  },
  { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

export { publicRoutes, privateRoutes };
