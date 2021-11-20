import React, { useState, useEffect } from "react";
//import React, { useCallback } from "react";
import "./App.scss";
import Message from "./Message/Message";

export default function App() {
  const [messageList, sendMessageList] = useState([]);
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');
  
  // const sendRobot = (messageList) => {
  //   if(messageList.length){
  //     if(messageList[messageList.length - 1].author !== 'Robot'){
  //       setTimeout(() => {
  //         sendMessageList([
  //           ...messageList,
  //           {text: `messega send ${messageList[messageList.length - 1].author}`, author: 'Robot', id: Date.now() },
  //         ])
  //       }, 1500)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   sendRobot(messageList);
  // }, [messageList]);

  
  // const botSendMessage = useCallback(() => {
  //   if(messageList.length){
  //     if(messageList[messageList.length - 1].author !== 'Robot'){
  //       setTimeout(() => {
  //         sendMessageList([
  //           ...messageList,
  //           {text: `messega send ${messageList[messageList.length - 1].author}`, author: 'Robot', id: Date.now() },
  //         ])
  //       }, 1500)
  //     }
  //   }
  // })

  // useEffect(() => {
  //   botSendMessage();
  // }, [botSendMessage]);

  useEffect(() => {
    if(messageList.length){
      if(messageList[messageList.length - 1].author !== 'Robot'){
        setTimeout(() => {
          sendMessageList([
            ...messageList,
            {text: `messega send ${messageList[messageList.length - 1].author}`, author: 'Robot', id: Date.now() },
          ])
        }, 1500)
      }
    }
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
    <div className="app">
      <header className="app__header">
        <div className="app__wrp">
          {messageList.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              author={message.author}
            />
          ))}
        </div>
      </header>
      <main className="main">
        <form className="main__form">
          <textarea value={value} onChange={changeText} className="main__message"></textarea>
          <div className="main__wrp">
            <input value={author} onInput={changeAuthor} className="main__author"></input>
            <button onClick={sendMessage} className="main__send">
              send
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

