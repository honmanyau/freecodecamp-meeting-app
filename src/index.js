import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Auth from './components/Auth';
import Main from './components/Main';
import Footer from './components/Footer';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <Auth />
          <Main />
          <Footer />
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
