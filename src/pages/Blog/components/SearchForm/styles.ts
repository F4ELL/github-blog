import styled from 'styled-components'

export const SearchFormContainer = styled.section`
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin-bottom: 3rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: 1.125rem;
            font-weight: 700;
            color: ${props => props.theme['base-subtitle']};
        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme['base-span']};
        }
    }

    form {
        width: 100%;

        input {
            width: 100%;
            background-color: ${props => props.theme['base-input']};
            color: ${props => props.theme['base-text']};
            padding: 0.75rem 1rem;
            border: 1px solid ${props => props.theme['base-border']};
            border-radius: 6px;

            &::placeholder {
                color: ${props => props.theme['base-label']};
            }
        }
    }
`