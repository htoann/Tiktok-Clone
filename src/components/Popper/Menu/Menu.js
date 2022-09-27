import React from "react";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "~/components/Popper/PopperWrapper";
import MenuItem from "./MenuItem.js";
import styles from "~/static/sass/components/menu.module.scss";
import Header from "./Header.js";

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  // const items2 = [English, Francais, Suomi, Philippines];

  const onBack = () => {};

  return (
    <Tippy
      visible
      interactive
      delay={[0, 700]}
      render={(attrs) => (
        <div className={styles.menu_items} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <Header title="Language" onBack={onBack} />
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
