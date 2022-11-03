import { followService } from "~/features/accounts/services/postFollowService";

const handleFollowFunc = async (user) => {
  let newUser;
  if (user && user.is_followed) {
    newUser = await followService.unfollow(user.id);
  } else {
    newUser = await followService.follow(user.id);
  }

  return newUser && newUser.is_followed;
};

export default handleFollowFunc;
