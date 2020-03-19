import React from 'react';
import styled from 'styled-components';

const InnerLink = styled.a`
    color: #61dafB;
`;

const Link = ({url, title}) => (
    <InnerLink
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    >
        {title}
    </InnerLink>
);

export default Link;