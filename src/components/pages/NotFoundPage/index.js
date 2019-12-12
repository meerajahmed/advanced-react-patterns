import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <Container fluid className="py-2">
        <Header className="d-flex justify-content-center my-5 p-2">
            <H1 className="display-3">404 - <Link to="/">Go home</Link></H1>
        </Header>
    </Container>
);

export default NotFoundPage;