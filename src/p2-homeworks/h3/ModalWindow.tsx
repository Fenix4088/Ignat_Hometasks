import React from "react";
import s from './Greeting.module.css'

type ModalWindowPropsType = {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
    name: string
    setName: (value: string) => void
}

export const ModalWindow: React.FC<ModalWindowPropsType> = (props) => {
    const isVisible = {
        display: props.modalOpen ? "inline-block" : "none",
    }

    const onClickModalSubmitHandler = () => {
        props.setName("");
        props.setModalOpen(false)
    }

    return (
        <div className={s.modal} style={isVisible}>
            <div className={s.flexContainer}>
                <div className={s.modalGreeting}>Hello {props.name}!!</div>
                <button onClick={onClickModalSubmitHandler} className={s.modalSubmit}>Ok</button>
            </div>
        </div>
    );
}
