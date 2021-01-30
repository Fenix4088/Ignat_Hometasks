import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type PersonT = {
    _id: number;
    name: string;
    age: number;
}

export type InitialPeopleT = Array<PersonT>

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]


function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name + " " + p.age}
        </div>
    ))

    const sortData = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: e.currentTarget.value}))
    }

    const getAdult = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: "18"}))

    return (
        <div>
            homeworks 8


            {finalPeople}
            <div>
                <SuperButton onClick={sortData} value={"up"}>sort up</SuperButton>
            </div>
            <div>
                <SuperButton onClick={sortData} value={"down"}>sort down</SuperButton>
            </div>
            <div>
                <SuperButton onClick={getAdult}>check 18</SuperButton>
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
