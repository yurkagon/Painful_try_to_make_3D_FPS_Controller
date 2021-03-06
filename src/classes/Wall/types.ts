import { Cell } from "classes/MapHandler";

export type TextureData = {
  original: string;
  name: string;
  darker: null | string;
  brightnessValue?: number;
};

export type WallTexturesData = Partial<
  {
    [key in Cell]: TextureData;
  }
>;
