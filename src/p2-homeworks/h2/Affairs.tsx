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
    props.setFilter('all');
  };
  const setHigh = () => {
    props.setFilter('high');
  };
  const setMiddle = () => {
    props.setFilter('middle');
  };
  const setLow = () => {
    props.setFilter('low');
  };


// TODO: Почему это костыль?

  const filterByPriority = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLButtonElement;
    if (btn.dataset.element) {
      const currentProperty = btn.dataset.element;
      props.setFilter(currentProperty);
    }
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


      {/*      <button onClick={filterByPriority} data-element="all">All</button>
      <button onClick={filterByPriority} data-element="high">High</button>
      <button onClick={filterByPriority} data-element="middle">Middle</button>
      <button onClick={filterByPriority} data-element="low">Low</button>*/}

    </div>
  )
    ;
}

export default Affairs;
