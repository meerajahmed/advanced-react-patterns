import React from 'react';

import { Container } from '@bootstrap-styled/v4';

const Layout = ({ children, ...props }) => {
    return (
        <Container fluid className="py-2" {...props} >
            {children}
        </Container>
    );
};

export default Layout;