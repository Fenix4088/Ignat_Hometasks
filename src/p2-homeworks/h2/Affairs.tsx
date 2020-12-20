import React from 'react';
import Affair from './Affair';
import { AffairType, FilterType } from './HW2';
import classes from './Affairs.module.css';

type AffairsPropsType = {
  data: Array<AffairType>
  setFilter: (filterValue: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((dataItem: AffairType) => (
    <Affair
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


  // TODO: ИГНАТ, мне сказали, что эта ф-я  - костыль :-( Почему это костыль?
  // * filterByPriority VS (setAll, setHigh, setMiddle, setLow)
  // * заревьювай ее, если будет время
  // * для нее отдельный блок кнопок, ниже оригинальных

/*    const filterByPriority = (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = e.target as HTMLButtonElement;
      if (btn.dataset.element) {
        const currentProperty = btn.dataset.element as FilterType;
        props.setFilter(currentProperty);
      }
    };*/


  return (
    <div>
      <div className={classes.affairsWrapper}>
        {mappedAffairs}
      </div>
      <button className={classes.filterBtn} onClick={setAll}>All</button>
      <button className={classes.filterBtn} onClick={setHigh}>High</button>
      <button className={classes.filterBtn} onClick={setMiddle}>Middle</button>
      <button className={classes.filterBtn} onClick={setLow}>Low</button>


      {/* TODO:filterByPriority buttons*/}

      {/*            <button onClick={filterByPriority} className={classes.filterBtn} data-element="all">All</button>
      <button onClick={filterByPriority} className={classes.filterBtn} data-element="high">High</button>
      <button onClick={filterByPriority} className={classes.filterBtn} data-element="middle">Middle</button>
      <button onClick={filterByPriority} className={classes.filterBtn} data-element="low">Low</button>*/}

    </div>
  )
    ;
}

export default Affairs;
