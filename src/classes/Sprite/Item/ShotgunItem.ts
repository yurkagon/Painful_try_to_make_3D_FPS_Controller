import Item from "./Item";
import { iPosition } from "../../../types";
import { takeWeapon } from "../../../variables/sounds";

class ShotgunItem extends Item {
  constructor(position: iPosition) {
    super({
      type: "shotgun",
      position: {
        ...position,
        y: 350
      }
    });
  }

  pickItem() {
    console.log("Pick shotgun");
    takeWeapon.play();

    super.pickItem();
  }
}

export default ShotgunItem;