import React, { useState } from 'react';
import Affairs from './Affairs';
import AlternativeAffairs from './AlternativeAffairs';
import commonStyles from "../../p1-main/m1-ui/u1-app/App.module.css";

// types
export type AffairPriorityType = 'middle' | 'high' | 'low';
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
};
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: 'React', priority: 'high' },
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'html & css', priority: 'middle' }
];

// helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => {
  if (filter === 'all') return affairs;
  else return affairs.filter(item => item.priority === filter);
};
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
  return affairs.filter((item) => item._id !== _id);
};


function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

  return (
    <div className={commonStyles.mb30}>
        <h4>HW2</h4>
      {/*TODO: Добавил свой функционал в AlternativeAffairs*/}
      <AlternativeAffairs
        data={filteredAffairs}
        setAffairs={setAffairs}
      />
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
    </div>
  );
}

export default HW2;
