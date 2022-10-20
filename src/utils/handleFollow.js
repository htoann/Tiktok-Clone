import { followService } from "~/services/postFollowService";

const handleFollowFunc = async (user) => {
  let newUser;
  if (user.is_followed) {
    newUser = await followService.unFollow(user.id);
  } else {
    newUser = await followService.follow(user.id);
  }

  return newUser.is_followed;
};

export default handleFollowFunc;
