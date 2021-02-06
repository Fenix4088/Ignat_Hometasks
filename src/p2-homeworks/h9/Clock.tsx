import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date);
    const [show, setShow] = useState<boolean>(false);
    const [position, setPosition] = useState<any>({top: 0, left: 0})

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date);
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = (e: any) => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
        setPosition({top: 0, left: 0})
    };

    const onMouseMove = (e: any) => {

        const {x, y} = getCoordinates(e)
        setShow(true);
        setPosition({top: y + 10, left: x + 10})
    }

    const getCoordinates = (e: any):any => {
        const {clientY, clientX} = e
        const {x, y} = e.currentTarget.getBoundingClientRect()
        return {x: clientX - x, y: clientY - y}
    }

    const stringTime = date.toLocaleTimeString("ru");
    const stringDate = date.toLocaleDateString("en", {
        weekday: 'long',
        year: "numeric",
        month: 'long',
        day: 'numeric'
    });

    return (
        <div style={{position: 'relative', userSelect: 'none'}}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                 onMouseMove={onMouseMove}
            >
                {stringTime}
            </div>


            {show && (
                <div style={{position: "absolute", top: `${position.top}px`, left: `${position.left}px`}}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
