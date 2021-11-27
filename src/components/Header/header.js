import React from "react";
import {Box} from "@mui/material";
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Box>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/chat">Chat</Link>
        </Box>
    )
}