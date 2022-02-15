import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from '@mui/material/styles';
import { reducers } from './redux/reducers';

import { theme } from './config';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        basename={
          process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/'
        }
      >
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
      
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
