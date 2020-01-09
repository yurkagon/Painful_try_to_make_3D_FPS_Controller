import $ from "jquery";

import GameObject from "../GameObject/index";
import Player from "../Player/Player";

import { generetaTranslate3d } from "../../helpers";
import { iSpriteConfig } from "../../types";
import GameObjectLOD from "../GameObjectLOD/index";

class Sprite extends GameObjectLOD {
  private static readonly spriteElementList: JQuery = $(".sprites");

  protected readonly spriteElement: JQuery = $("<div/>");
  readonly self: JQuery = $("<div/>").addClass("sprite-cont");

  private config: iSpriteConfig;

  constructor(config: iSpriteConfig) {
    super(config.position);

    this.config = config;
  }

  start() {
    const { type, position, classType = "" } = this.config;

    this.spriteElement.addClass(`sprite ${classType} ${type}`);
    this.spriteElement.css("transform", generetaTranslate3d(position));
    this.self.append(this.spriteElement);
    Sprite.spriteElementList.append(this.self);

    super.start();
  }

  update() {
    if (this.isActive) {
      const player = Player.getInstance();

      const translate3d = generetaTranslate3d(this.getPosition());
      const rotate3d = `rotate3d(0, 1, 0, ${-player.rotation.y}deg)`;

      this.self.css("transform", translate3d);
      this.spriteElement.css("transform", rotate3d);
    }

    super.update();
  }

  destroy() {
    this.spriteElement.remove();
    this.self.remove();

    super.destroy();
  }
}

export default Sprite;