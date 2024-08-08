import { DragEvent, FC, useState } from "react";
import { ItemType } from "../../types/item";
import { items } from "../../data/items";
import Card from "../Card/Card";
import style from "./Board.module.scss";

const Board: FC = () => {
  const [dragging, setDragging] = useState<ItemType | null>(null);
  const [data, setData] = useState<ItemType[]>(items);

  const handleDragStart = (
    event: DragEvent<HTMLDivElement>,
    item: ItemType
  ) => {
    setDragging(item);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", event.currentTarget.innerHTML);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetItem: ItemType
  ) => {
    event.preventDefault();
    if (dragging) {
      const newItems = items.filter((item) => item.id !== dragging.id);
      const targetIndex = newItems.findIndex(
        (item) => item.id === targetItem.id
      );
      newItems.splice(targetIndex, 0, dragging);
      setData(newItems);
      setDragging(null);
    }
  };

  return (
    <div className={style["board"]}>
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default Board;
