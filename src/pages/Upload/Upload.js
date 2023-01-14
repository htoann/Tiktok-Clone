import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Core/Button";
import Loader from "~/components/Core/Loader";
import { UploadIcon } from "~/components/Icons";
import { videosService } from "~/features/videos/services/videosService";
import styles from "./Upload.module.scss";

function Upload() {
  const [filePreview, setFilePreview] = useState("");
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleFile = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    setFilePreview(src);
    setFile(e.target.files[0]);
  };

  const handleUploadVideo = async (data) => {
    setIsLoading(true);
    await videosService.postVideo(data);
    setIsLoading(false);
    navigate("/");
  };

  const submitForm = (data) => {
    const fullData = { ...data, upload_file: file };

    const formData = new FormData();

    for (const key in fullData) {
      if (key === "allows") {
        if (fullData[key])
          fullData.allows.forEach(function (value) {
            formData.append("allows[]", value);
          });
      } else {
        formData.append(key, fullData[key]);
      }
    }

    handleUploadVideo(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.upload_wrapper}>
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
            <label htmlFor="upload_file">
              <div className={styles.upload_state}>
                {file ? (
                  <div className={styles.preview_v2}>
                    <video
                      className={styles.video_preview}
                      src={filePreview}
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
                    <Button primary noAction className={styles.select_file}>
                      Select File
                    </Button>
                  </>
                )}
              </div>
            </label>
            <input
              onChange={handleFile}
              name="upload_file"
              id="upload_file"
              required
              type="file"
              accept="video/*"
            />
          </div>
          <div className={styles.upload_content_right}>
            <div className={styles.form_item}>
              <div className={styles.form_header}>
                <span className={styles.form_label}>Caption</span>
                <span className={styles.form_count}>
                  {caption.length} / 150
                </span>
              </div>
              <div className={styles.form_footer}>
                <textarea
                  maxLength={150}
                  name="description"
                  id="description"
                  {...register("description")}
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
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
                  className={styles.form_input}
                  name="thumbnail_time"
                  id="thumbnail_time"
                  {...register("thumbnail_time")}
                  type="number"
                  placeholder="Thumbnail capture position, units of seconds (Ex: 2)"
                  defaultValue={1}
                />
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.form_header}>
                <span className={styles.form_label}>Music</span>
              </div>
              <div className={styles.form_footer}>
                <input
                  className={styles.form_input}
                  name="music"
                  id="music"
                  type="text"
                  placeholder="Music"
                  {...register("music")}
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
                  className={styles.form_select}
                  name="viewable"
                  id="viewable"
                  {...register("viewable")}
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
                    value="comment"
                    type="checkbox"
                    name="allows"
                    id="allows"
                    defaultChecked
                    {...register("allows")}
                  />
                  <label htmlFor="">Comment</label>
                </div>
                <div className={styles.form_checkbox}>
                  <input
                    value="duet"
                    type="checkbox"
                    name="allows"
                    id="allows"
                    defaultChecked
                    {...register("allows")}
                  />
                  <label htmlFor="">Duet</label>
                </div>
                <div className={styles.form_checkbox}>
                  <input
                    value="stitch"
                    type="checkbox"
                    name="allows"
                    id="allows"
                    defaultChecked
                    {...register("allows")}
                  />
                  <label htmlFor="">Stitch</label>
                </div>
              </div>
            </div>
            <div className={styles.button_container}>
              <Button text className={styles.discard}>
                Discard
              </Button>
              <Button
                primary
                disabled={!file || isLoading}
                className={styles.post}
                type="submit"
                leftIcon={isLoading ? <Loader /> : null}
              >
                {!isLoading && "Post"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Upload;
