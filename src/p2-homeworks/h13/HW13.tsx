import React, { useEffect, useState } from "react";
import { RequestAPI } from "./RequestAPI";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

export const HW13 = () => {
  const [isCheckbox, setIsCheckbox] = useState<boolean>(false);
  const [radioVal, setRadioVal] = useState<string>("Send VALID data");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {

    const data = radioVal === "Send VALID data" ? isCheckbox : radioVal;

    RequestAPI.getData(data)
      .then((res) => res.json())
      .then((data) => setMessage(data.errorText))
      .catch((error) => setMessage(error.errorText));
  }, [isCheckbox, radioVal]);

  const onChangeChecked = () => setIsCheckbox(!isCheckbox);

  const onChangeOption = (value: string):void => setRadioVal(value);

  return (
    <div style={{marginTop: "25px"}}>
      <h5>Homework 13</h5>
      <SuperCheckbox onChangeChecked={onChangeChecked} />
      <span style={{ marginLeft: "10px" }}>{message}</span>
      <SuperRadio value={radioVal} options={[ "Send VALID data", "Send NOT-VALID data"]} onChangeOption={onChangeOption}/>

    </div>
  );
};