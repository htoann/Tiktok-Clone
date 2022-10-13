export const routes = {
  home: "/",
  following: "/following",
  profile: "/@:nickname",
  profileLink: (nickname) => `/@${nickname}`,
  live: "/live",
  upload: "/upload",
  search: "/search",
  messages: "/messages",
  login: "/login",
  register: "/register",
};
