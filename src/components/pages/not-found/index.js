import React from 'react';
import { Link } from 'react-router-dom';

import {H1, Header} from "@bootstrap-styled/v4";

import Layout from "../../templates/layout";

const NotFound = () => (
    <Layout>
        <Header className="d-flex justify-content-center my-5 p-2">
            <H1 className="display-3">404 - <Link to="/">Go home</Link></H1>
        </Header>
    </Layout>
);

export default NotFound;