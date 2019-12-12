import React from "react";
import {Provider} from 'react-redux';

import AppRouter from "./routes/AppRouter";
import store from './global/store';


const App = () => (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

export default App;