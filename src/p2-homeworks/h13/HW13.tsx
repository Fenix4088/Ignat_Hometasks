import React, { useEffect, useState } from "react";
import { RequestAPI } from "./RequestAPI";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

export const HW13 = () => {
  const [isCheckbox, setIsCheckbox] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    RequestAPI.getData(isCheckbox)
      .then((res) => res.json())
      .then((data) => setMessage(data.errorText))
      .catch((error) => setMessage(error.errorText));
  }, [isCheckbox]);

  const onChangeChecked = () => setIsCheckbox(!isCheckbox);

  return (
    <div>
      <SuperCheckbox onChangeChecked={onChangeChecked} />
      <span style={{ marginLeft: "10px" }}>{message}</span>
    </div>
  );
};