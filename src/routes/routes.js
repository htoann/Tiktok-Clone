import { lazy } from "react";
import { config } from "~/config";

// Layouts
const HeaderOnly = lazy(() => import("~/layouts/HeaderOnly"));

// Pages
const Following = lazy(() => import("~/pages/Following"));
const Home = lazy(() => import("~/pages/Home"));
const Live = lazy(() => import("~/pages/Live"));
const NotFound = lazy(() => import("~/pages/NotFound"));
const Profile = lazy(() => import("~/pages/Profile"));
const Upload = lazy(() => import("~/pages/Upload"));
const Messages = lazy(() => import("~/pages/Messages"));
const Login = lazy(() => import("~/pages/Login"));
const Register = lazy(() => import("~/pages/Register/Register"));
const VideoDetail = lazy(() => import("~/pages/VideoDetail"));
const ListComment = lazy(() =>
  import("~/features/comments/components/ListComment")
);

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.messages, component: Messages, layout: HeaderOnly },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: HeaderOnly },
  { path: config.routes.register, component: Register, layout: HeaderOnly },
  { path: config.routes.video, component: VideoDetail, layout: HeaderOnly },
  { path: config.routes.comment, component: ListComment, layout: HeaderOnly },
  { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
