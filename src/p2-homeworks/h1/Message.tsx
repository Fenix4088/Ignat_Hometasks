import React from "react";
import { messageDataTyp } from './HW1';
import classes from './Message.module.css';


function Message(props: messageDataTyp) {
    return (
        <div className={classes.chatItem}>
            <img className={classes.avatar} src={props.avatar} alt="Awatar" />
            <div className={classes.message}>
                <div className={classes.name}>{props.name}</div>
              <div className={classes.messageInfo}>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
              </div>
            </div>
        </div>
    );
}

export default Message;
