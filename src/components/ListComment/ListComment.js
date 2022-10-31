import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { commentService } from "~/services/commentService";
import Button from "../Button";
import Image from "../Image";
import Loader from "../Loader";
import styles from "./ListComment.module.scss";

function ListComment() {
  const location = useLocation();
  const videoId = location.pathname.split("/")[2];

  const [listComment, setListComment] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await commentService.listComment(videoId);
      setListComment(result);

      setLoading(false);
    };

    fetchApi();
  }, [location.pathname]);

  // comment: "beau";
  // created_at: "2022-10-29 22:30:04";
  // id: 376;
  // is_liked: false;
  // likes_count: 2;

  return (
    <div className={styles.content_container}>
      <div className={styles.comment_list_container}>
        {!loading ? (
          listComment.length > 0 ? (
            listComment.length > 0 &&
            listComment.map((comment) => (
              <div className={styles.comment_item_container} key={comment.id}>
                <div className={styles.comment_content_container}>
                  <Image src={comment.user.avatar} />
                  <div className={styles.comment_container}>
                    <p> {comment.user.nickname}</p>
                    <p className={styles.comment_text}>{comment.comment}</p>
                    {/* <p>is_liked {comment.is_liked}</p> */}
                    {/* <p>likes_count {comment.likes_count}</p> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No comment</p>
          )
        ) : (
          <Loader />
        )}
      </div>
      <div className={styles.bottom_comment_container}>
        <input type="text" placeholder="Add comment..." />
        <Button primary>Post</Button>
      </div>
    </div>
  );
}

export default ListComment;
