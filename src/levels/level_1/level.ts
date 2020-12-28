import { LevelConfig } from "classes/Level";
import { doom_e1m1 } from "sound";

import House from "prefabs/models/House";

import Enemy from "classes/Sprite/Enemy";

import map from "./map";
import preloadData from "./preloadData";

const data: LevelConfig = {
  start() {
    setLevel();
  },
  map: {
    data: map
  },
  skybox: {
    url: "img/skybox.jpg",
    rotatingMultiplier: -15,
    positionY: -5,
    size: "60%"
  },
  preloadData,
  music: doom_e1m1
};

const setLevel = () => {
  // new House({
  //   position: {
  //     x: 0,
  //     y: 493,
  //     z: -3000
  //   }
  // });

  for (let i = 0; i < 20; i++)
    new Enemy({
      type: "guard",
      position: {
        x: 1000 + i * 100,
        z: 1000 + i * 100
      }
    });
};

export default data;
