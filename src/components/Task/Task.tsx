import { DragEvent, FC } from "react";
import { TaskType } from "../../types/task";
import style from "./Task.module.scss";

type TaskPropsType = {
  task: TaskType;
  onDragStart: (event: DragEvent<HTMLDivElement>, taskId: string) => void;
};

const Task: FC<TaskPropsType> = ({ onDragStart, task }) => {
  return (
    <div
      className={style["task"]}
      draggable
      onDragStart={(event) => onDragStart(event, task.id)}
    >
      {task.title}
    </div>
  );
};

export default Task;
