import { DragEvent, FC, useState } from "react";
import { columns } from "../../data/columns";
import { BoardType } from "../../types/board";
import Column from "../Column/Column2";
import style from "./Board4.module.scss";
import { TaskType } from "../../types/task";

const initialBoard = columns;

const Board: FC = () => {
  const [board, setBoard] = useState<BoardType>(initialBoard);

  const onDragStart = (event: DragEvent<HTMLDivElement>, taskId: string) => {
    event.dataTransfer.setData("text/plain", taskId);
  };

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const moveTask = (taskId: string, targetColumnId: string) => {
    let movedTask: TaskType | undefined;
    const newColumns = board.columns
      .map((column) => {
        if (column.tasks.some((task) => task.id === taskId)) {
          movedTask = column.tasks.find((task) => task.id === taskId);
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.id !== taskId),
          };
        }
        return column;
      })
      .map((column) => {
        if (column.id === targetColumnId && movedTask) {
          const tasks = [...column.tasks];
          tasks.push(movedTask);
          return {
            ...column,
            tasks,
          };
        }
        return column;
      });
    setBoard({ ...board, columns: newColumns });
  };

  const onDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetColumnId: string
  ) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    if (taskId) {
      moveTask(taskId, targetColumnId);
    }
  };

  return (
    <div className={style["board"]}>
      {board.columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
};

export default Board;
