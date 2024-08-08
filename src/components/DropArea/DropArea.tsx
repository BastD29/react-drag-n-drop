import { FC } from "react";
import style from "./DropArea.module.scss";

const DropArea: FC = () => {
  return (
    <div className={style["drop-area"]}>
      <h2>Drop Area</h2>
    </div>
  );
};

export default DropArea;
