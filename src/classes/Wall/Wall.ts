import $ from "jquery";
import { IPosition } from "../../types";
import GameObject from "../GameObject";
import { generateTranslate3d } from "../../helpers";

import "./style.scss";

interface IWallConfig {
  position?: IPosition;
  rotation?: number;
  scale?: number;
  css?: {
    [key: string]: string;
  };
}

class Wall extends GameObject {
  public position: IPosition;

  private static readonly container = $(".level");
  private readonly element: JQuery = $("<div/>").addClass("wall");

  constructor(position: IPosition) {
    super(position);

    this.position = position;
  }

  start() {
    Wall.container.append(this.element);
  }

  update() {}
}

export default Wall;
