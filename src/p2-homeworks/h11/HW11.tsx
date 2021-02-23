import React, {useCallback, useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    //! Игнат, подскажи, нужно ли тут в зависимости для useCallback передавать эти сэты???(setValue1, setValue2)
    const changeLeftRange = useCallback((value: number):void => {
        setValue1(value);
    }, [setValue1])
    const onChangeRange = useCallback((values: number[]):void => {
        setValue1(values[0]);
        setValue2(values[1]);
    }, [setValue1, setValue2])

    return (
        <div>
            <hr/>
            homeworks 11

            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={changeLeftRange}
                />
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
                <span style={{marginRight: "10px"}}>{value1}</span>
                <SuperDoubleRange
                    rangeValues={[value1, value2]}
                    onChangeRange={onChangeRange}
                />
                <span style={{marginLeft: "10px"}}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
