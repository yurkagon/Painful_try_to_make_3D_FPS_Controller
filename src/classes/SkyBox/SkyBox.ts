import GameObject from "../GameObject/index";
import Player from "../Player/Player";

class SkyBox extends GameObject {
  private player: Player;

  start() {
    this.player = Player.getInstance();
  }

  update() {
    const { camera, rotation } = this.player;

    camera.css("background-position", -15 * rotation.y + "px -5px");
  }
}

export default SkyBox;