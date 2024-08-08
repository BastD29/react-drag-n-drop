// import { Dispatch, FC } from "react";
// import { TaskType } from "../../types/task";
// import Card from "../Card/Card2";
// import DropArea from "../DropArea/DropArea";
// import style from "./Column.module.scss";

// type ColumnPropsType = {
//   title: string;
//   tasks: TaskType[];
//   setActiveCard: Dispatch<React.SetStateAction<number | null>>;
// };

// const Column: FC<ColumnPropsType> = ({ tasks, title, setActiveCard }) => {
//   return (
//     <div className={style["column"]}>
//       <h3>{title}</h3>
//       <DropArea />
//       {tasks.map((task, index) => (
//         <>
//           <Card
//             key={index}
//             task={task}
//             index={index}
//             setActiveCard={setActiveCard}
//           />
//           <DropArea />
//         </>
//       ))}
//     </div>
//   );
// };

// export default Column;
