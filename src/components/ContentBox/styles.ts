import styled from 'styled-components'

type Props = {
    bgColor: string
}

export const ContentBoxContainer = styled.div<Props>`
    width: 100%;

    background-color: ${({ theme, bgColor }) => bgColor === 'profile' ? theme['base-profile'] : theme['base-post']};
    border: 2px solid transparent;
    border-radius: 10px;
    box-shadow: ${({ bgColor }) => bgColor === 'profile' ? '0 2px 28px 0 rgba(0, 0, 0, 0.2)' : 'transparent'};

    padding: 2rem;

    &:hover {
        border: 2px solid ${({ theme, bgColor }) => bgColor === 'profile' ? 'transparent' : theme['base-label']};
        transition: all ease 0.2s;
    }
`