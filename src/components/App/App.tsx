import { FC } from "react";
import Board from "../Board/Board4";
import style from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={style["app"]}>
      <Board />
    </div>
  );
};

export default App;
