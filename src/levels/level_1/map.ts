import { CellMap } from "classes/MapHandler";

// prettier-ignore
const map: CellMap =  [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', 's', 's', 'sl','s', '#', 's', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', 's', ' ', ' ', ' ', 's', ' ', 's', 'm1','#', ' ', ' ', ' ', ' ', ' ', ' '],
  ['#', ' ', '#', '#', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', 'sl',' ', ' ', ' ', 'sf',' ', ' ', ' ', 'm2',' ', ' ', ' ', ' ', ' ', ' '],
  ['#', ' ', '#', '#', ' ', '#', ' ', '#', '#', ' ', '#', ' ', ' ', ' ', ' ', 's', ' ', ' ', ' ', 's', ' ', 's', 'm1','#', ' ', ' ', ' ', ' ', ' ', ' '],
  ['#', ' ', '#', '#', ' ', '#', ' ', '#', '#', ' ', '#', 'w', 'w', 'w', 'w', '#', 'w', ' ', 'w', 'w', ' ', 'w', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['#', ' ', ' ', ' ', ' ', '#', ' ', '#', ' ', ' ', 's', ' ', ' ', ' ', ' ', 's', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'p', 'p', 'p', 'p', 'p', 'p', 'p', ' '],
  ['#', ' ', '#', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'pb',' ', 'pb',' '],
  ['#', ' ', '#', '#', ' ', '#', ' ', '#', ' ', ' ', 's', ' ', ' ', ' ', ' ', 's', ' ', ' ', ' ', ' ', ' ', ' ', 'pn','p', ' ', ' ', 'p', ' ', 'p', ' '],
  ['#', '#', '#', '#', ' ', '#', ' ', '#', '#', ' ', '#', 'w', 'w', 'w', 'w', '#', 'w', ' ', 'w', 'w', 'w', ' ', 'w', 'p', ' ', ' ', ' ', ' ', 'pb',' '],
  [' ', ' ', ' ', '#', ' ', '#', ' ', '#', '#', ' ', 's', 's', 's', 'sl','se','s', 'w', ' ', ' ', ' ', 'w', ' ', 'w', 'p', ' ', ' ', 'pn',' ', 'p', ' '],
  [' ', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', 'sf',' ', ' ', ' ', ' ', 's', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'p', 'p', 'p', '#', 'pb','p', ' '],
  [' ', ' ', '#', '#', ' ', '#', ' ', ' ', ' ', ' ', 's', ' ', 's', 'sl',' ', 's', 'w', 'w', 'b', 'b', 'b', ' ', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['#', '#', ' ', ' ', ' ', '#', '#', '#', '#', '#', 's', ' ', 's', 'sn',' ', 'sn','s', '#', 'b', ' ', '#', ' ', '#', ' ', '#', ' ', '#', ' ', 'b', 'b'],
  ['#', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', 's', ' ', 's', ' ', ' ', ' ', 's', 'b', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'b'],
  ['#', ' ', '#', '#', '#', 's', '#', '#', 'so','s', 'se',' ', 'se',' ', ' ', ' ', 'sf',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'b'],
  ['#', ' ', '#', '#', 's', ' ', ' ', ' ', ' ', ' ', 's', ' ', 's', ' ', ' ', ' ', 's', 'b', ' ', ' ', ' ', ' ', 'b', ' ', 'b', 'w', ' ', 'w', 'b', '#'],
  ['#', ' ', ' ', '#', '#', ' ', '#', '#', 's', 's', 's', ' ', 's', 'sl','s','sl', 's', 'b', 'b', 'b', 'b', 'b', '#', 'w', 'w', 'w', ' ', 'w', 'w', 'w'],
  ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'so','pb','pb','pb','p', 'pb','pb','pb','p', 'w', ' ', ' ', ' ', ' ', ' ', 'w'],
  [' ', '#', ' ', ' ', '#', ' ', '#', '#', 's', ' ', 's', ' ', 's', 'sl','pb',' ', ' ', ' ', 'p', ' ', ' ', ' ', 'pb','w', ' ', ' ', ' ', ' ', ' ', 'w'],
  [' ', '#', ' ', ' ', 'we',' ', 'we','m2',' ', ' ', 'm1','so','#', '#', 'pb',' ', ' ', ' ', ' ', ' ', ' ', ' ', 'p', 'pn',' ', 'b', 'bl','b', ' ', 'w'],
  [' ', '#', ' ', ' ', 'w', ' ', 'w', 'm1',' ', ' ', 'm2','#', '#', '#', 'pb',' ', ' ', ' ', 'pn',' ', ' ', ' ', ' ', ' ', ' ', 'bl','b', 'bl',' ', 'w'],
  [' ', '#', ' ', ' ', 'w', ' ', 'w', '#', 'm1','m2','#', '#', '#', '#', 'pb',' ', ' ', ' ', 'pb',' ', ' ', ' ', 'pn','p', ' ', 'b', 'bl','b', ' ', 'w'],
  [' ', '#', ' ', ' ', 'wf',' ', ' ', 'w', '#', '#', '#', '#', '#', '#', 'pb',' ', ' ', ' ', 'pb',' ', ' ', ' ', 'pb','w', ' ', ' ', ' ', ' ', ' ', 'w'],
  [' ', '#', ' ', ' ', 'w', ' ', ' ', ' ', 'w', '#', '#', '#', '#', '#', 'pb',' ', ' ', ' ', 'pb',' ', ' ', ' ', 'pb','w', ' ', ' ', ' ', ' ', ' ', 'w'],
  [' ', '#', ' ', ' ', '#', 'w', 'w', ' ', 'w', '#', '#', '#', '#', '#', '#', 'p', ' ', 'pn','#', 'pb','p', ' ', 'p', 'w', ' ', 'b', 'bl','b', ' ', 'w'],
  [' ', '#', ' ', ' ', '#', '#', 'wl',' ', 'wl','#', 'wf','w', 'w', 'wf','w', 'w', ' ', 'w', 'w', 'w', 'w', ' ', 'w', 'w', ' ', 'bl','b', 'bl',' ', 'w'],
  [' ', '#', ' ', ' ', '#', '#', 'w', ' ', 'w', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'b', 'bl','b', ' ', 'w'],
  [' ', '#', ' ', ' ', '#', '#', 'w', ' ', ' ', ' ', ' ', 'b', ' ', 'b', 'b', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
  [' ', '#', '#', '#', '#', '#', '#', 'wf','w', 'w', 'w', '#', 'w', '#', '#', 'w', 'wl','w', 'wf','w', 'w', 'wf','w', 'w', 'w', 'w', 'w', 'w', 'w', '#'],
];

export default map;
