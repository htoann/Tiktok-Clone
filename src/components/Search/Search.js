import React, { useState, useRef, useEffect } from "react";
import PopperWrapper from "~/components/Popper/Wrapper";
import AccountItem from "~/components/AccountItem/AccountItem";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FaSearch, FaSpinner, FaTimesCircle } from "react-icons/fa";
import styles from "./Search.module.scss";
import axios from "axios";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const searchInput = useRef(null);

  const handleSearchValue = (e) => {
    if (e.target.value[0] !== " ") {
      setSearchValue(e.target.value);
    }
  };

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

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchResult = async () => {
      setIsLoading(true);
      try {
        const res = await axios(
          `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
            searchValue
          )}&type=less`
        );
        setSearchResult(res.data.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };
    fetchResult();
  }, [searchValue]);

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
              {searchResult.map((item) => (
                <AccountItem
                  user={item}
                  key={item.id}
                  onClick={handleHideResult}
                />
              ))}
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
            onChange={handleSearchValue}
            ref={searchInput}
            onFocus={handleShowResult}
          />
          {searchValue && !isLoading && (
            <button className={styles.clear} onClick={handleClear}>
              <FaTimesCircle />
            </button>
          )}
          {isLoading && <FaSpinner className={styles.loading} />}
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
