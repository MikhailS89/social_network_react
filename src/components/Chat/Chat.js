import React, {useState} from 'react';
import './Chat.scss';
import {List, ListItem} from "@mui/material";

export default function Chat() {

const [chats] = useState([
    {name: 'Картинки', id: [] },
    {name: 'Котики', id: [] },
    {name: 'Работа', id: [] },
    {name: 'Дом', id: [] },
    {name: 'Учеба', id: [] }
  ]);

    return (
        <List className="MuiList-root MuiList-padding chat css-h4y409-MuiList-root">
            {chats.map((chat, index) => (
                <ListItem 
                    key={index}
                    className="MuiListItem-root MuiListItem-gutters MuiListItem-padding chat-list css-1p823my-MuiListItem-root"
                >
                    <p>{chat.name}</p>
                </ListItem>
            ))}
            
        </List>
    )
}