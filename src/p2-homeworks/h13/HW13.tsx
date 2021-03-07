import React from "react";
import {RequestAPI} from "./RequestAPI";

export const HW13 = () => {
    RequestAPI.getData().then(res => console.log(res))
    return(
        <>
        </>
    )
}