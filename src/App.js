import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppRouter from './routes/AppRouter';
import store from './global/store';
import theme from './styles/theme';

const appTheme = createMuiTheme(theme);

const App = () => {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
