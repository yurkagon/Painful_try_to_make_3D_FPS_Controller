import { ResourcesData } from "State";

import splash from "ui/screens/Loading/splash.png";

import menuBackground from "ui/screens/Menu/background.png";
import levelSelectBackground from "ui/screens/LevelSelect/level-select.jpg";
import fakeQuitBackground from "ui/screens/FakeQuit/fake-quit.png";
import aboutBackground from "ui/screens/About/about.jpg";
import font from "ui/components/Text/font.png";

import { menu_click_url } from "sounds/menu/menu_click";
import { duke_theme_url } from "sounds/menu/menu_music";
import { start_menu_url } from "sounds/menu/start_menu";
import { menu_back_url } from "sounds/menu/menu_back";

import globalBackground from "../../style/background.jpg";

const preloadData: ResourcesData = {
  images: [
    "icon.png",
    splash,
    globalBackground,
    menuBackground,
    font,
    levelSelectBackground,
    fakeQuitBackground,
    aboutBackground
  ],
  sounds: [start_menu_url, menu_click_url, duke_theme_url, menu_back_url]
};

export default preloadData;
