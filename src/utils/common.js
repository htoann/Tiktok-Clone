export const getFullName = (user) => {
  return user && (user.fullname || user.first_name + " " + user.last_name);
};
