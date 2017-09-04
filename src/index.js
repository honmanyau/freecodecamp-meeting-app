// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';



ReactDOM.render(
  <Provider store={store}>
    <div>
      index.js
    </div>
  </Provider>,
  document.getElementById('root')
);
