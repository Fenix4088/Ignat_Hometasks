import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import commonStyles from "../../p1-main/m1-ui/u1-app/App.module.css";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3 () {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        const newUser: UserType = {
            _id: v1(),
            name
        }
        setUsers([newUser, ...users]);
    }

    return (
        <div className={commonStyles.mb30}>
            <h4 style={{marginBottom: '40px'}}>HW3</h4>

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    );
}

export default HW3;
