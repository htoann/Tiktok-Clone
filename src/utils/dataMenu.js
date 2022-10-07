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
        { type: "languea", title: "বাঙ্গালি (ভারত)" },
        { type: "languea", title: "Cebuano (Pilipinas)" },
        { type: "languea", title: "Čeština (Česká republika, )" },
        { type: "languea", title: "Deutsch" },
        { type: "languea", title: "Ελληνικά (Ελλάδα)" },
        { type: "languea", title: "Español" },
        { type: "languea", title: "Suomi (Suomi)" },
        { type: "languea", title: "Filipino (Pilipinas)" },
        { type: "languea", title: "Français" },
        { type: "languea", title: "हिंदी}" },
        { type: "languea", title: "Magyar (Magyarország)" },
        { type: "languea", title: "Bahasa Indonesia (Indonesia, )" },
        { type: "languea", title: "Italiano (Italia)" },
        { type: "languea", title: "日本語（日本）" },
        { type: "languea", title: "Basa Jawa (Indonesia, )" },
        { type: "languea", title: "ខ្មែរ (កម្ពុជា)" },
        { type: "languea", title: "한국어 (대한민국)" },
        { type: "languea", title: "Bahasa Melayu (Malaysia, )" },
        { type: "languea", title: "မြန်မာ (မြန်မာ)" },
        { type: "languea", title: "Nederlands (Nederland)" },
        { type: "languea", title: "Polski (Polska)" },
        { type: "languea", title: "Português (Brasil)" },
        { type: "languea", title: "Română (Romania)" },
        { type: "languea", title: "Русский (Россия)" },
        { type: "languea", title: "Svenska (Sverige)" },
        { type: "languea", title: "ไทย (ไทย)" },
        { type: "languea", title: "Türkçe (Türkiye)" },
        { type: "languea", title: "Українська (Україна)" },
        { type: "languea", title: "简体中文" },
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
