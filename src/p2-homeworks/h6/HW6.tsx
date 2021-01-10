import React, { useState } from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { restoreState, saveState } from "./localStorage/localStorage";
import s from "./HW6.module.scss";

function HW6() {
  const [value, setValue] = useState<string>("");

  const save = () => {
    saveState<string>("editable-span-value", value);
  };
  const restore = () => {
    const restoreData = restoreState("editable-span-value", value);
    setValue(restoreData);
  };

  const actionName = (): HTMLDivElement => {
    return document.createElement("div");
  };

  return (
    <div>
      <hr />
      homeworks 6
      <div className={s.editableSpanWrap}>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{ children: value ? undefined : "Enter text..." }}
        />
      </div>
      <SuperButton onClick={save}>save</SuperButton>
      <SuperButton onClick={restore}>restore</SuperButton>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
      <hr />
    </div>
  );
}

export default HW6;
