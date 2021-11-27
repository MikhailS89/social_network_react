import React, { useState, useEffect, useRef } from "react";
import "./message-list.scss";
import Message from "../../Message/Message";
import {Button, TextField, Box, FormControl} from "@mui/material";
import { useParams } from 'react-router-dom';
//import Chat from "../Chat/Chat"

export default function MessageList() {
  const [messageList, sendMessageList] = useState({});
  const [value, setValue] = useState('');
  const ref = useRef(null);
  const {roomId} = useParams();
  // const roomMeassage = messageList[roomId] ?? [];

  useEffect(() => {
    const roomMeassage = messageList[roomId] ?? [];
    const lastMessage = roomMeassage[roomMeassage.length - 1]
    let timerId = null
    
      if(roomMeassage.length && lastMessage.author !== 'Robot'){
        timerId = setTimeout(() => {
          sendMessageList({
            ...messageList,
            [roomId]:[
              ...(messageList[roomId]),
            {text: `messega send`, author: 'Robot', id: Date.now() },
            ]
          })
        }, 1500)
      }
    
    return () => clearInterval(timerId);
  }, [messageList]);

  //автофокус на текстовое поле при открытии страницы и после отправки сообщения
  useEffect(() => {
    ref.current?.focus();
  }, [messageList]);


  const changeText = (event) => {
    setValue(event.target.value);
  };
  const sendMessage = (event) => {
    event.preventDefault();
    sendMessageList({
      ...messageList,
      [roomId]:[
        ...(messageList[roomId] ?? []),
      { text: value, author: "User", id: Date.now() },
      ]
    });
    setValue('')
  };

  const roomMeassage = messageList[roomId] ?? [];

  return (
    <Box className="app">
      {/* <Chat/> */}
      <Box className="message-list">
        <Box className="app__header">
          <Box className="app__wrp">
            {roomMeassage.map((message) => (
              <Message
                key={message.id}
                text={message.text}
                author={message.author}
              />
            ))}
          </Box>
        </Box>
        <Box className="main">
          <FormControl className="main__form">
            <TextField id="outlined-multiline-static"
              label="text"
              multiline
              rows={4} 
              ref={ref} 
              value={value} 
              onChange={changeText} 
              className="main__message"/>
            <Box className="main__wrp">
              <Button 
                variant="outlined" 
                size="medium" 
                onClick={sendMessage}
                className="css-1rwt2y5-MuiButtonBase-root-MuiButton-root" >
                send
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}

