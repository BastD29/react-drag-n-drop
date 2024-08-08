// import { DragEvent, FC, useState } from "react";
// import style from "./Board2.module.scss";

// const Board: FC = () => {
//   const [widgets, setWidgets] = useState<string[]>([]);

//   function handleOnDrag(event: DragEvent, widgetType: string) {
//     event.dataTransfer.setData("widgetType", widgetType);
//   }

//   function handleOnDrop(event: DragEvent) {
//     const widgetType = event.dataTransfer.getData("widgetType") as string;
//     console.log("widgetType:", widgetType);
//     setWidgets([...widgets, widgetType]);
//   }

//   function handleDragOver(event: DragEvent) {
//     event.preventDefault();
//   }

//   return (
//     <div className={style["board"]}>
//       <div className={style["widgets"]}>
//         <div
//           className={style["widget"]}
//           draggable
//           onDragStart={(e) => handleOnDrag(e, "Widget A")}
//         >
//           Widget A
//         </div>
//         <div
//           className={style["widget"]}
//           draggable
//           onDragStart={(e) => handleOnDrag(e, "Widget B")}
//         >
//           Widget B
//         </div>
//         <div
//           className={style["widget"]}
//           draggable
//           onDragStart={(e) => handleOnDrag(e, "Widget C")}
//         >
//           Widget C
//         </div>
//       </div>
//       <div
//         className={style["page"]}
//         onDrop={handleOnDrop}
//         onDragOver={handleDragOver}
//       >
//         {widgets.map((widget, index) => (
//           <div className={style["dropped-widget"]} key={index}>
//             {widget}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Board;
