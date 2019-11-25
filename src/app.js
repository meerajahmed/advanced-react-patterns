import React from "react";
import AppRouter from "./routes/app-router";
import BootstrapProvider from "@bootstrap-styled/provider";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }
`;

const App = () => (
    <BootstrapProvider reset={true} injectGlobal={true}>
        <GlobalStyle />
        <AppRouter/>
    </BootstrapProvider>
);

export default App;