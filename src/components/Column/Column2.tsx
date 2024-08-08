import { FC } from "react";
import { ColumnType } from "../../types/column";
import Task from "../Task/Task";
import style from "./Column2.module.scss";

type ColumnPropsType = {
  column: ColumnType;
  onDrop: (event: React.DragEvent<HTMLDivElement>, columnId: string) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, taskId: string) => void;
};

const Column: FC<ColumnPropsType> = ({
  column,
  onDragOver,
  onDragStart,
  onDrop,
}) => {
  return (
    <div
      className={style["column"]}
      onDrop={(event) => onDrop(event, column.id)}
      onDragOver={onDragOver}
    >
      <h2>{column.title}</h2>
      {column.tasks.map((task) => (
        <Task key={task.id} task={task} onDragStart={onDragStart} />
      ))}
    </div>
  );
};

export default Column;
