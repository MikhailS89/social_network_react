import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ThemeProvider, createTheme} from "@mui/material";
import { ChatPage } from './pages/chat';

const theme = createTheme([]);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/chat/*" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


