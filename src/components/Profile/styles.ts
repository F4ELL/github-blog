import styled from 'styled-components'

export const ProfileContainer = styled.section`
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
    padding: 2rem 2rem;

    background-color: ${props => props.theme['base-profile']};
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    display: flex;
    gap: 2rem;

    margin-top: -5.5rem;
    margin-bottom: 4.5rem;
`

export const ProfilePicture = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;

    margin-left: 0.5rem;
`

export const ProfileInfos = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 0.5rem;

        h1 {
            font-size: 1.5rem;
            color: ${props => props.theme['base-title']};
            font-weight: 700;
        }

        a {
            text-decoration: none;
            color: ${props => props.theme.blue};
            font-size: 0.75rem;
            font-weight: 700;

            display: flex;
            align-items: center;
            gap: 0.5rem;

            border-bottom: 1px solid transparent;
            cursor: pointer;

            &:hover {
                transition: border 0.2s;
                border-bottom: 1px solid ${props => props.theme.blue};
            }
        }
    }

    main {
        width: 100%;
        height: 3.25rem;

        margin-bottom: 1.5rem;
    }
`

export const MediaContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1.5rem;
`

export const MediaCard = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        color: ${props => props.theme['base-subtitle']};
    }
`