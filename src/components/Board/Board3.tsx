// import { FC, useState } from "react";
// import Column from "../Column/Column";
// import { TaskType } from "../../types/task";
// import { tasks } from "../../data/tasks";
// import style from "./Board3.module.scss";

// const Board: FC = () => {
//   const [data, setData] = useState<TaskType[]>(tasks);
//   const [activeCard, setActiveCard] = useState<number | null>(null);

//   return (
//     <div className={style["board"]}>
//       <Column title="To do" tasks={data} setActiveCard={setActiveCard} />
//       <Column title="Doing" tasks={data} setActiveCard={setActiveCard} />
//       <Column title="Done" tasks={data} setActiveCard={setActiveCard} />
//     </div>
//   );
// };

// export default Board;
