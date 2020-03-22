import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import store from '../../../global/store';
import theme from '../../../styles/theme';
import Routes from '../../../routes';

const appTheme = createMuiTheme(theme);

const Root = () => {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Root;
