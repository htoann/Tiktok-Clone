import React, { useState } from "react";
import Button from "~/components/Core/Button";
import { UploadIcon } from "~/components/Icons";
import styles from "./Upload.module.scss";

function Upload() {
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    setFile(src);
  };

  return (
    <div className={styles.upload_wrapper}>
      <div className={styles.upload_container}>
        <span className={styles.upload_title}>Upload video</span>
        <div className={styles.upload_sub_title}>
          <span>Post a video to your account</span>
        </div>
        <div className={styles.upload_content}>
          <div
            className={
              file ? `${styles.preview}` : `${styles.upload_content_left}`
            }
          >
            <label htmlFor="video">
              <div className={styles.upload_state}>
                {file ? (
                  <div className={styles.preview_v2}>
                    <video
                      className={styles.video_preview}
                      src={file}
                      autoPlay
                      preload="auto"
                      playsInline=""
                      crossOrigin="anonymous"
                      loop
                      type="video/*"
                      controls
                    ></video>
                    <div className={styles.phone_preview}></div>
                  </div>
                ) : (
                  <>
                    <UploadIcon />
                    <span className={styles.upload_state_title}>
                      Select video to upload
                    </span>
                    <span className={styles.upload_state_sub_title}>
                      Or drag and drop a file
                    </span>
                    <span className={styles.upload_state_notice}>
                      MP4 or WebM
                    </span>
                    <span className={styles.upload_state_notice}>
                      720x1280 resolution or higher
                    </span>
                    <span className={styles.upload_state_notice}>
                      Up to 10 minutes
                    </span>
                    <span className={styles.upload_state_notice}>
                      Less than 2 GB
                    </span>
                    <Button primary className={styles.select_file}>
                      Select File
                    </Button>
                  </>
                )}
              </div>
            </label>
            <input
              onChange={handleFileChange}
              id="video"
              type="file"
              accept="video/*"
            />
          </div>
          <div className={styles.upload_content_right}>
            <div className={styles.form_item}>
              <div className={styles.form_header}>
                <span className={styles.form_label}>Caption</span>
                <span className={styles.form_count}>0/150</span>
              </div>
              <div className={styles.form_footer}>
                <textarea
                  // value={description}
                  // onChange={(e) => setDescription(e.target.value)}
                  className={styles.form_textarea}
                />
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.form_header}>
                <span className={styles.form_label}>Cover</span>
              </div>
              <div className={styles.form_footer}>
                <input
                  // value={thumbnail}
                  // onChange={(e) => setThumbnail(e.target.value)}
                  className={styles.form_input}
                  type="number"
                  placeholder="Thumbnail capture position, units of seconds (Ex: 2)"
                />
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.form_header}>
                <span className={styles.form_label}>Music</span>
              </div>
              <div className={styles.form_footer}>
                <input
                  // value={music}
                  // onChange={(e) => setMusic(e.target.value)}
                  className={styles.form_input}
                  type="text"
                  placeholder="Music"
                />
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.form_header}>
                <span className={styles.form_label}>
                  Who can watch this video
                </span>
              </div>
              <div className={styles.form_footer}>
                <select
                  // onChange={(e) => setViewable(e.target.value)}
                  className={styles.form_select}
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.form_header}>
                <span className={styles.form_label}>Allow users to:</span>
              </div>
              <div className={styles.form_footer}>
                <div className={styles.form_checkbox}>
                  <input
                    // onChange={handleAllowsChange}
                    value="comment"
                    type="checkbox"
                    name="allows"
                  />
                  <label htmlFor="">Comment</label>
                </div>
                <div className={styles.form_checkbox}>
                  <input
                    // onChange={handleAllowsChange}
                    value="duet"
                    type="checkbox"
                    name="allows"
                  />
                  <label htmlFor="">Duet</label>
                </div>
                <div className={styles.form_checkbox}>
                  <input
                    // onChange={handleAllowsChange}
                    value="stitch"
                    type="checkbox"
                    name="allows"
                  />
                  <label htmlFor="">Stitch</label>
                </div>
              </div>
            </div>
            <div className={styles.button_container}>
              <Button text className={styles.discard} onClick={true}>
                Discard
              </Button>
              <Button primary className={styles.post} onClick={true}>
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
