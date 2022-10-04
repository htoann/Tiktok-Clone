import React, { useState, useRef } from "react";
import PopperWrapper from "~/components/Popper/Wrapper";
import AccountItem from "~/components/AccountItem/AccountItem";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FaSearch, FaSpinner, FaTimesCircle } from "react-icons/fa";
import styles from "./Search.module.scss";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const searchInput = useRef(null);

  setTimeout(() => {
    setSearchResult([1, 2]);
  }, 1000);

  const handleClear = () => {
    setSearchResult([]);
    setSearchValue("");
    searchInput.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <div>
      <Tippy
        visible={showResult && searchResult.length > 0}
        interactive
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={styles.search_results} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className={styles.search_title}>Account</div>
              <AccountItem />
              <AccountItem />
            </PopperWrapper>
          </div>
        )}
      >
        <form className={styles.navbar_search}>
          <input
            value={searchValue}
            className={styles.navbar_search_input}
            type="text"
            placeholder="Search accounts and videos"
            onChange={(e) => setSearchValue(e.target.value)}
            ref={searchInput}
            onFocus={handleShowResult}
          />
          {searchValue && (
            <FaTimesCircle className={styles.clear} onClick={handleClear} />
          )}
          {/* <FaSpinner className={styles.loading} /> */}
          <span className={styles.navbar_search_line}></span>
          <button className={styles.navbar_search_icon}>
            <FaSearch />
          </button>
        </form>
      </Tippy>
    </div>
  );
}

export default Search;
