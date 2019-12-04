import React from "react";
import BootstrapProvider from "@bootstrap-styled/provider";
import { createGlobalStyle } from 'styled-components';
import {Provider} from 'react-redux';

import AppRouter from "./routes/AppRouter";
import store from './global/store';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }
`;

const App = () => (
    <BootstrapProvider reset={true} injectGlobal={true}>
        <GlobalStyle />
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    </BootstrapProvider>
);

export default App;