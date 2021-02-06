import { Draggable, DraggableLocation } from "react-beautiful-dnd";
import { CardShape } from "../types/data";

export const reorder = (list: CardShape[], startIdx: number, endIdx: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIdx, 1);

  result.splice(endIdx, 0, removed);

  return result;
};

export const move = (
  listSource: CardShape[],
  listDest: CardShape[],
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const sourceClone = Array.from(listSource);
  const destClone = Array.from(listDest);
  const [removed] = sourceClone.splice(source.index, 1);

  destClone.splice(destination.index, 0, removed);

  return {
    listSource: sourceClone,
    listDest: destClone,
  };
};

