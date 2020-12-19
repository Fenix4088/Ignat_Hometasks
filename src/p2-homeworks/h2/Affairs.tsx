import React from 'react';
import Affair from './Affair';
import { AffairType } from './HW2';
import classes from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
  data: Array<AffairType>
  setFilter: any
  deleteAffairCallback: any
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((dataItem: AffairType) => (
    <Affair // should work
      key={dataItem._id}
      affair={dataItem}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const setAll = () => {
  }; // need to fix
  const setHigh = () => {
  };
  const setMiddle = () => {
  };
  const setLow = () => {
  };

  return (
    <div>
      <div className={classes.affairsWrapper}>
        {mappedAffairs}
      </div>

      <button onClick={setAll}>All</button>
      <button onClick={setHigh}>High</button>
      <button onClick={setMiddle}>Middle</button>
      <button onClick={setLow}>Low</button>
    </div>
  )
    ;
}

export default Affairs;
