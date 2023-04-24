import styled from 'styled-components'

export const PostContainer = styled.main`
    width: 100%;
`

export const PostContent = styled.section`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;

    margin-top: -5.5rem;
`

export const PostInfo = styled.div`
    width: 100%;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 1.25rem;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme['base-title']};

        margin-bottom: 0.5rem;
    }

    ul {
        list-style: none;
        
        display: flex;
        align-items: center;
        gap: 2rem;
    }
`

export const PostInteration = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        color: ${({ theme }) => theme['base-span']};
    }
`

export const PostContentArea = styled.div`
    width: 100%;

    padding: 2.5rem 2rem;
`