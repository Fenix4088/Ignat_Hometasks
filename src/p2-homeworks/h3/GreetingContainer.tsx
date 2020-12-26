import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import commonStyles from "../../p1-main/m1-ui/u1-app/App.module.css";
import {ModalWindow} from "./ModalWindow";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value: newName} = e.currentTarget;
        setName(newName);
    };

    const addUser = (): void => {
        const decimalsStartMatch = decimalsStarCheck(name);

        if (name.trim() && !decimalsStartMatch) {
            setError(``);
            addUserCallback(name);
            setModalOpen(true);
        } else {
            setError(`Enter valid name! It can not start from numbers or spaces!`);
            setName("");
        }
    };

    const decimalsStarCheck = (string: string): boolean => {
        const regexp = /(^\d+)|(^\s)/g;
        const match = regexp.test(name);
        return match;
    }

    const totalUsers = users.length;

    return (
        <div className={commonStyles.hw3Wrapper}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
            {/*TODO: ModalWindow for Review please*/}
            <div className={commonStyles.modalWrapper}>
                <ModalWindow modalOpen={modalOpen} setModalOpen={setModalOpen} name={name} setName={setName}/>
            </div>
        </div>
    );
}

export default GreetingContainer;
