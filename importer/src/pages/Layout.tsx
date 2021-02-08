import React, {FC} from 'react';

import {LayoutContainerStyled} from './layout.styles';

export const Layout: FC = ({ children }) => (
    <LayoutContainerStyled>
        {children}
    </LayoutContainerStyled>
);