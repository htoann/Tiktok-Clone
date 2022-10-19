import { config } from "~/config";

// Layouts
import HeaderOnly from "~/layouts/HeaderOnly";

// Pages
import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Live from "~/pages/Live";
import NotFound from "~/pages/NotFound";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Messages from "~/pages/Messages";
import Login from "~/pages/Login";
import Register from "~/pages/Register/Register";

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
  { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
