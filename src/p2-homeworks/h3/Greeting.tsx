import React from "react";
import s from "./Greeting.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error === "" ? `${s.validInput} ${s.input}` : `${s.error} ${s.input}`;

    return (
        <div className={s.wrapper}>
            <div className={s.errorMessage}>{error}</div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <FontAwesomeIcon icon={faUsers} style={{color: '#2858f5'}}/>
            <span className={s.usersCounter}>{totalUsers}</span>
            <div>
                <button onClick={addUser} className={s.addBtn}>add</button>
            </div>

        </div>
    );
}

export default Greeting;
