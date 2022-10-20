import React, { useEffect, useState } from "react";
import ListAccount from "~/components/ListAccount";
import { getUsersService } from "~/services/getUsersService";

function FollowingList() {
  const [page, setPage] = useState(1);
  const [followingList, setFollowingList] = useState([]);

  const handleSeeMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchFollowingList = async () => {
      const followingList = await getUsersService.followingList(page);
      if (followingList.length == 0) {
        return setPage(1);
      }
      setFollowingList(followingList);
    };

    fetchFollowingList();
  }, [page]);

  return (
    <ListAccount
      title="Suggested accounts"
      list={followingList}
      onClick={handleSeeMore}
      page={page}
    />
  );
}

export default FollowingList;
