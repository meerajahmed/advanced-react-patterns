import React from 'react';
import { render } from 'react-dom';

import BootstrapProvider from '@bootstrap-styled/provider';
import { Header, H1 } from '@bootstrap-styled/v4';


const App = () => (
    <BootstrapProvider reset={true}>
        <Header className="d-flex justify-content-center my-5 p-2">
            <H1 color="muted">Hello World!</H1>
        </Header>
    </BootstrapProvider>
    );
render(<App />, document.getElementById('root'));