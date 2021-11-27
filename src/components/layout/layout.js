import React from "react";
import {Box} from "@mui/material";
import './layout.scss'


export default function Layout({chats, messages}) {
    return (
        <Box>
            <Box>{chats}</Box>
            <Box>{messages}</Box>
        </Box>
    )
}