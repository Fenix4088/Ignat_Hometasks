import React from 'react';
import Message from './Message';
import commonStyles from "../../p1-main/m1-ui/u1-app/App.module.css";

export type messageDataTyp = {
  avatar: string
  name: string
  message: string
  time: string

}

const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Yehor',
  message: 'Let play the GAME :-)',
  time: '22:00'
};

function HW1() {
  return (
    <div className={commonStyles.mb30}>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />

      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
    </div>
  );
}

export default HW1;
