import React from 'react';
import './Chat.scss';
import {List, ListItem} from "@mui/material";

export default function Chat({list}) {
    return (
        <List className="MuiList-root MuiList-padding chat css-h4y409-MuiList-root">
            {list.map((item) => (
                <ListItem 
                    key={item.id}
                    className="MuiListItem-root MuiListItem-gutters MuiListItem-padding chat-list css-1p823my-MuiListItem-root"
                >
                    <p>{item.name}</p>
                </ListItem>
            ))}
            
        </List>
    )
}