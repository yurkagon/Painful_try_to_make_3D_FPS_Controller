import Scene from "../Scene/Scene";
import { iPosition } from "../../types";

abstract class GameObject {
  static readonly defaultPosition: iPosition = {
    x: 0,
    y: 0,
    z: 0
  };

  public position: iPosition;

  public isStarted = false;

  constructor(position: iPosition = { ...GameObject.defaultPosition }) {
    this.position = position;

    const scene = Scene.getInstance();
    scene.subscribeGameObject(this);
  }
  abstract start(): void;
  abstract update(): void;

  destroy() {
    const scene = Scene.getInstance();
    scene.unSubscribeGameObject(this);
  }

  getPosition() {
    return this.position;
  }
}

export default GameObject;
