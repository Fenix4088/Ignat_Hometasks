import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import AlternativeSuperDoubleRange from "./common/c8-SuperDoubleRange/AlternativeSuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const changeLeftRange = (value: number):void => {
        setValue1(value);
    }

    const onChangeRange = (values: number[]):void => {
        console.log()
        setValue1(values[0]);
        setValue2(values[1]);
    }

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
            <AlternativeSuperDoubleRange/>
            <hr/>
        </div>
    );
}

export default HW11;
