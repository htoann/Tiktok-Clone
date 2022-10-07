import {
  FaAutoprefixer,
  FaQuestion,
  FaRegKeyboard,
  FaRegUser,
  FaBitcoin,
  FaRegSun,
  FaSignOutAlt,
  FaAffiliatetheme,
  FaCode,
  FaRegPaperPlane,
  FaFacebook,
  FaInstagram,
  FaLink,
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
  { title: "View profile", icon: <FaRegUser /> },
  { title: "Get coins", icon: <FaBitcoin /> },
  { title: "Settings", icon: <FaRegSun /> },
  ...MENU_ITEMS_1,
  { title: "Log out", icon: <FaSignOutAlt />, type: "logout", separate: true },
];

export const MENU_ITEMS_SHARE = [
  { title: "Embed", icon: <FaCode /> },
  { title: "Send to friends", icon: <FaRegPaperPlane /> },
  { title: "Share to Facebook", icon: <FaFacebook /> },
  { title: "Share to Instagram", icon: <FaInstagram /> },
  { title: "Copy link", icon: <FaLink /> },
];
