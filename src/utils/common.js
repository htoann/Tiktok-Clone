export const getFullName = (user) => {
  return user && (user.nickname || user.first_name + " " + user.last_name);
};
