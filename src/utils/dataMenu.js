import {
  FaAutoprefixer,
  FaQuestion,
  FaRegKeyboard,
  FaRegUser,
  FaBitcoin,
  FaRegSun,
  FaSignOutAlt,
  FaAffiliatetheme,
} from "react-icons/fa";
import React from "react";

export const MENU_ITEMS_1 = [
  {
    title: "English",
    icon: <FaAutoprefixer />,
    children: {
      title: "Language",
      data: [
        { type: "language", code: "en", title: "English" },
        { type: "language", code: "vi", title: "Tiếng Việt" },
      ],
    },
  },
  { title: "Feedback and help", icon: <FaQuestion /> },
  { title: "Keyboard shortcuts", icon: <FaRegKeyboard /> },
  { title: "Dark Theme", icon: <FaAffiliatetheme />, type: "darktheme" },
];

export const MENU_ITEMS_2 = [
  { title: "View profile", to: "/profile", icon: <FaRegUser /> },
  { title: "Get coins", icon: <FaBitcoin /> },
  { title: "Settings", icon: <FaRegSun /> },
  ...MENU_ITEMS_1,
  { title: <hr /> },
  { title: "Log out", icon: <FaSignOutAlt />, type: "logout" },
];
