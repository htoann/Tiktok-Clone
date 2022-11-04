import React, { useEffect, useState } from "react";
import ListAccount from "~/features/accounts/components/ListAccount";
import { getUsersService } from "~/features/accounts/services/getUsersService";

function SuggestedList() {
  const [perpage, setPerpage] = useState(5);
  const [suggestedList, setSuggestedList] = useState([]);

  const handleSeeMore = () => {
    if (perpage != 20) {
      setPerpage((prev) => prev + 5);
    } else {
      setPerpage(5);
    }
  };

  useEffect(() => {
    const fetchSuggestedList = async () => {
      const suggestedList = await getUsersService.suggestedList(1, perpage);
      if (suggestedList.length == 0) {
        return setPerpage(5);
      }
      setSuggestedList(suggestedList);
    };

    fetchSuggestedList();
  }, [perpage]);

  return (
    <ListAccount
      title="Suggested accounts"
      list={suggestedList}
      onClick={handleSeeMore}
      perpage={perpage}
    />
  );
}

export default SuggestedList;
