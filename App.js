import React from 'react';
import Navigators from './src/navigator';
import { store } from './src/redux/store';
import {Provider} from 'react-redux';

export default () => (
  <Provider store={store}>
    <Navigators />
  </Provider>
);
