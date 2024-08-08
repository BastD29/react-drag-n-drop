// import { Dispatch, FC } from "react";
// import { TaskType } from "../../types/task";
// import style from "./Card2.module.scss";

// type CardPropsType = {
//   task: TaskType;
//   index: number;
//   setActiveCard: Dispatch<React.SetStateAction<number | null>>;
// };

// const Card: FC<CardPropsType> = ({ task, index, setActiveCard }) => {
//   return (
//     <div
//       className={style["card"]}
//       draggable
//       onDragStart={() => setActiveCard(index)}
//       onDragEnd={() => setActiveCard(null)}
//     >
//       <h3>{task.title}</h3>
//     </div>
//   );
// };

// export default Card;
