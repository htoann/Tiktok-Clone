import React from "react";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "~/components/Popper/PopperWrapper";
import MenuItem from "./MenuItem.js";
import styles from "~/static/sass/layout/navbar.module.scss";

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      interactive
      render={(attrs) => (
        <div className={styles.navbar_menu_items} tabIndex="-1" {...attrs}>
          <PopperWrapper>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
