import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MessageList from './components/message-list/message-list';
import {ThemeProvider, createTheme} from "@mui/material";

const theme = createTheme([]);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MessageList/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


