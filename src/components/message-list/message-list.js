import React, { useState, useEffect, useRef } from "react";
import "./message-list.scss";
import Message from "../../Message/Message";
import {Button, TextField, Box, FormControl} from "@mui/material";
import Chat from "../Chat/Chat"
//import { makeStyles } from "@mui/styles";

// export const useStyle = makeStyles(() => ({
//   button: {
//     padding: "12px 0 0 0"
//   }
// }));

export default function MessageList() {
  const [messageList, sendMessageList] = useState([]);
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');
  const ref = useRef(null);
  //const styles = useStyle();
  const [chat, setChat] = useState([
    {name: 'Картинки', id: Date.now() },
    {name: 'Котики', id: Date.now() },
    {name: 'Работа', id: Date.now() },
    {name: 'Дом', id: Date.now() },
    {name: 'Учеба', id: Date.now() }
  ]);

  useEffect(() => {
    let timerId = null
    if(messageList.length){
      if(messageList[messageList.length - 1].author !== 'Robot'){
        timerId = setTimeout(() => {
          sendMessageList([
            ...messageList,
            {text: `messega send ${messageList[messageList.length - 1].author}`, author: 'Robot', id: Date.now() },
          ])
        }, 1500)
      }
    }
    return () => clearInterval(timerId);
  }, [messageList]);

  //автофокус на текстовое поле при открытии страницы и после отправки сообщения
  useEffect(() => {
    console.log(ref);
    ref.current?.focus();
  }, [messageList]);


  const changeText = (event) => {
    setValue(event.target.value);
  };
  const changeAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const sendMessage = (event) => {
    event.preventDefault();
    sendMessageList([
      ...messageList,
      { text: value, author: author, id: Date.now() },
    ])
    setValue('')
    setAuthor('')
  };

  return (
    <Box className="app">
      <Chat list={chat}/>
      <Box className="message-list">
        <Box className="app__header">
          <Box className="app__wrp">
            {messageList.map((message) => (
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
              <TextField 
                label="name"
                id="outlined-size-small"
                size="small" 
                value={author} 
                onInput={changeAuthor} 
                className="main__author"/>
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

