import React, {useState} from 'react';
import './Chat.scss';
import {List, ListItem} from "@mui/material";
import { Link, useParams } from 'react-router-dom';

export default function Chat() {

const {roomId} = useParams();
const [chats] = useState([
    {name: 'pictures', id: [] },
    {name: 'cats', id: [] },
    {name: 'work', id: [] },
    {name: 'home', id: [] },
    {name: 'study', id: [] }
  ]);

    return (
        <List className="MuiList-root MuiList-padding chat css-h4y409-MuiList-root">
            {chats.map((chat, index) => (
                <Link key={chat.name} to={`/chat/${chat.name}`}>
                    <ListItem
                        className="MuiListItem-root MuiListItem-gutters MuiListItem-padding chat-list css-1p823my-MuiListItem-root"
                        selected={chat.name === roomId}
                    >
                        <p>{chat.name}</p>
                    </ListItem>
                </Link>
            ))}
            
        </List>
    )
}