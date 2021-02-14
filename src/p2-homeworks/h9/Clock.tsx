import React, {CSSProperties, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);
  const [position, setPosition] = useState<any>({ top: 0, left: 0 });

  const stop = () => {
    clearTimeout(timerId);
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
    setPosition({ top: 0, left: 0 });
  };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { x, y } = getCoordinates(e);
    setShow(true);
    setPosition({ top: y + 10, left: x + 10 });
  };
  const getCoordinates = (e: React.MouseEvent<HTMLDivElement>): {x: number; y: number} => {
    const { clientY, clientX } = e;
    const { x, y } = e.currentTarget.getBoundingClientRect();
    return { x: clientX - x, y: clientY - y };
  };

  const stringTime = date.toLocaleTimeString("ru");
  const stringDate = date.toLocaleDateString("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const clockContainerS: CSSProperties = {
    position: "relative",
    userSelect: "none",
    width: "200px",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column nowrap",
    alignItems: "center",

  }
  const tooltipS: CSSProperties = {
    position: "absolute",
    top: `${position.top}px`,
    left: `${position.left}px`,
    width: "150px",
    fontSize: "14px",
    textAlign: "center",
    backgroundColor: "#f2ebbf",
    borderRadius: "5px",
    border:"1px, solid, #fff"
  }
  const clockS: CSSProperties = {
    fontSize: "30px",
  };


  return (
    <div style={clockContainerS}>
      <div
          style={clockS}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {stringTime}
      </div>

      {show && (
        <div
          style={tooltipS}
        >
          {stringDate}
        </div>
      )}

      <div>
        <SuperButton onClick={start}>start</SuperButton>
        <SuperButton onClick={stop}>stop</SuperButton>
      </div>
    </div>
  );
}

export default Clock;
