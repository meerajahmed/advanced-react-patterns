import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppRouter from './routes/AppRouter';
import store from './global/store';

const App = () => (
  <>
    <CssBaseline />
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </>
);

export default App;
