import React, { useState } from 'react';
import classes from './Affairs.module.css';
import { AffairPriorityType, AffairType } from './HW2';

type AlternativeAffairsPropsType = {
  data: Array<AffairType>
  setAffairs: (affairs: Array<AffairType>) => void
}

function AlternativeAffairs(props: AlternativeAffairsPropsType) {


  const [radioBtn, setRadioBtn] = useState<string>('low');
  const [textInput, setTextInput] = useState<string>('');

  const getId = (arr: Array<AffairType>): number => {
    return arr[arr.length - 1]._id + 1;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = getId(props.data);

    if (textInput.trim() !== '') {
      props.data.push({ _id: id, name: textInput, priority: radioBtn });
      props.setAffairs([...props.data]);
    } else {
      alert('Enter affair name!');
    }

  };

  const inputChangeHandle = (event: React.FormEvent<HTMLInputElement>) => {
    let { value } = event.currentTarget;
    setTextInput(value);
  };

  const handleRadioChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setRadioBtn(value);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputWrapper}>
          <input onChange={inputChangeHandle} type="text" />
        </div>
        <div className={classes.checkboxesWrapper}>
          <label className={classes.checkboxWrap}>
            <input onChange={handleRadioChange} type="radio" name={'status'} value={'high'} />
            high
          </label>
          <label className={classes.checkboxWrap}>
            <input onChange={handleRadioChange} type="radio" name={'status'} value={'middle'} />
            middle
          </label>
          <label className={classes.checkboxWrap}>
            <input onChange={handleRadioChange} type="radio" name={'status'} value={'low'} />
            low
          </label>
        </div>
        <button type="submit" className={classes.addBtn}>Add</button>
      </form>
    </div>
  );
}

export default AlternativeAffairs;
