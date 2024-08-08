import { DragEvent, FC } from "react";
import { ItemType } from "../../types/item";
import style from "./Card.module.scss";

type CardPropsType = {
  item: ItemType;
  handleDragStart: (event: DragEvent<HTMLDivElement>, item: ItemType) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (
    event: React.DragEvent<HTMLDivElement>,
    targetItem: ItemType
  ) => void;
};

const Card: FC<CardPropsType> = ({
  item,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div
      className={style["card"]}
      key={item.id}
      draggable
      onDragStart={(e) => handleDragStart(e, item)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, item)}
    >
      {item.text}
    </div>
  );
};

export default Card;
