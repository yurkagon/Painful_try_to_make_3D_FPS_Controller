import State, { Screen } from "State";
import Level from "classes/Level";
import UI from "ui";

import "../style/index.scss";

(async () => {
  UI.init();

  if (State.settings.skipMenuOnLoad)
    return Level.load(State.settings.developmentAutoLoadLevel);

  State.setScreen(Screen.loading);

  await State.loader.loadResources(UI.preloadData);

  State.setScreen(Screen.menu);
})();
