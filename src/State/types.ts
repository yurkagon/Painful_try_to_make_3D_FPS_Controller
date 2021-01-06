import { Operation } from "utils/ResourceLoader";

export enum Screen {
  empty,
  loading,
  game,
  menu,
  level_select,
  fake_quit
}

export interface ResourcesData {
  images: string[];
  sounds: string[];
  operations?: Operation[];
}
