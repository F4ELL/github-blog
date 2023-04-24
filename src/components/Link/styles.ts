import styled from 'styled-components'

export const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.blue};
    text-transform: uppercase;

    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.blue};
        transition: all ease 0.2s;
    }
`