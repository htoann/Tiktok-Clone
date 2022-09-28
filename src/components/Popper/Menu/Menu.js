import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "~/components/Popper/PopperWrapper";
import MenuItem from "./MenuItem.js";
import styles from "~/static/sass/components/menu.module.scss";
import Header from "./Header.js";

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const handleChildren = (item) => {
    const isParent = item.children;
    if (isParent) {
      setHistory((prev) => [...prev, item.children]);
    }
  };

  const onBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderItems = () => {
    return current.data.map((item, index) => (
      <MenuItem key={index} data={item} onClick={() => handleChildren(item)} />
    ));
  };

  return (
    <Tippy
      visible
      interactive
      delay={[0, 700]}
      render={(attrs) => (
        <div className={styles.menu_items} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && <Header title="Language" onBack={onBack} />}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
