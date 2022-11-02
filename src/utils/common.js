export const getFullName = (user) => {
  return (
    user &&
    (user.fullname ||
      (user.first_name !== "" && user.first_name + " " + user.last_name) ||
      user.nickname)
  );
};
