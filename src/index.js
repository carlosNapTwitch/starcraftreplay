import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
    typography: {
      fontFamily: [
        'Open Sans Condensed', 'sans-serif'
      ].join(','),
    },
    overrides: {
      MuiFormLabel: { root: { color: 'grey' }},
      MuiInput: {
        input: {
          color: "white", // if you also want to change the color of the input, this is the prop you'd use
        }
      }
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
