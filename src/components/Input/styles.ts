import styled from 'styled-components'

export const InputContainer = styled.input`
    width: 100%;

    padding: 0.75rem 1rem;

    color: ${({ theme }) => theme['base-text']};

    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;

    &::placeholder {
        color: ${({ theme }) => theme['base-label']};
    }
`