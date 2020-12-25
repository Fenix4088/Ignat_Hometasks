import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<any>(""); // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value: newName} = e.currentTarget;
        setName(newName);
    };

    const addUser = (): void => {
        const decimalsStartMatch = decimalsStarCheck(name);
        console.log(decimalsStartMatch)

        if (name.trim() && !decimalsStartMatch) {
            setError(``);
            addUserCallback(name);
            alert(`Hello ${name}!`);
        } else {
            setError(`Enter valid name! It can not start from numbers or spaces!`);
        }
        setName("");

    };

    const decimalsStarCheck = (string: string): boolean => {
        const regexp = /(^\d+)|(^\s)/g;
        const match = regexp.test(name);
        return match;
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
