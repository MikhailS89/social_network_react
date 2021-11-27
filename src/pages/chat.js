import React from 'react';
import Layout from '../components/layout/layout';
import MessageList from '../components/message-list/message-list';
import { Routes, Route } from 'react-router-dom';
import Chat from '../components/Chat/Chat'
import './chat.scss'
import {Box} from "@mui/material";

export const ChatPage = () => {
    return (
        <Box>
            <Routes>
                <Route path="/" element={
                    <Layout
                        className="layout"  
                        chats={<Chat/>}
                        messages={<h4>Select chat</h4>}
                    />
                } />
                <Route path="/:roomId" element={
                    <Layout
                        className="layout" 
                        chats={<Chat/>}
                        messages={<MessageList/>}
                    />
                } />
            </Routes>
        </Box>
    );
};