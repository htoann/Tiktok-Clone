import React, { useState } from "react";
import PopperWrapper from "~/components/Popper/Wrapper";
import AccountItem from "~/components/AccountItem/AccountItem";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  setTimeout(() => {
    setSearchResult([1, 2]);
  }, 1000);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <Tippy
        visible={searchResult.length > 0}
        interactive
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
            className={styles.navbar_search_input}
            type="text"
            placeholder="Search accounts and videos"
            onChange={handleChange}
          />
          {searchValue && <p>Hello</p>}
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
