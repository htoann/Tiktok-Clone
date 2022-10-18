import React, { useState } from "react";
import PopperWrapper from "~/components/Popper/Wrapper";
import MenuItem from "./MenuItem.js";
import Header from "./Header.js";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Menu({
  children,
  items = [],
  onChange = () => {},
  hideOnClick = "false",
  right,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const handleToChildren = (item) => {
    const isParent = item.children;
    if (isParent) {
      setHistory((prev) => [...prev, item.children]);
    } else onChange(item);
  };

  const onBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderItems = () => {
    return current.data.map((item, index) => (
      <MenuItem
        key={index}
        data={item}
        onClick={() => handleToChildren(item)}
      />
    ));
  };

  // Reset to first page
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const classes = cx(styles.menu_items, {
    [styles.right]: right,
  });

  const handleResult = (attrs) => (
    <div className={classes} tabIndex="-1" {...attrs}>
      <PopperWrapper>
        {history.length > 1 && <Header title={current.title} onBack={onBack} />}
        {renderItems()}
      </PopperWrapper>
    </div>
  );

  return (
    <Tippy
      // visible
      interactive
      delay={[0, 500]}
      onHide={handleResetMenu}
      hideOnClick={hideOnClick}
      render={handleResult}
    >
      {children}
    </Tippy>
  );
}

Menu.prototype = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
  right: PropTypes.bool,
};

export default Menu;
