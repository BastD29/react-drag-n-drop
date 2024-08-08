import { TaskType } from "./task";

type ColumnType = {
  id: string;
  title: string;
  tasks: TaskType[];
};

export type { ColumnType };
