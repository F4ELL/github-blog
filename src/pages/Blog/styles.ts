import styled from 'styled-components'

export const BlogContainer = styled.main`
    width: 100%;
`

export const BlogContent = styled.div`
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;

    margin-top: -5.5rem;
`

export const ProfileContainer = styled.div`
    width: 100%;

    display: flex;
    gap: 2rem;

    img {
        width: 9.25rem;
        height: 9.25rem;

        border-radius: 8px;
    }
`

export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;

    p {
        margin-bottom: 1.5rem;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        list-style: none;
    }
`

export const ProfileHeader = styled.header`
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.5rem;

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme['base-title']};
    }
`

export const ProfileSocial = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        color: ${({ theme }) => theme['base-subtitle']};
    }
`

export const PublicationArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 4.5rem;
    margin-bottom: 0.75rem;

    h4 {
        font-size: 1.125rem;
        font-weight: 700;
        color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme['base-span']};
    }
`

export const PostsArea = styled.section`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    margin-bottom: 10rem;
    margin-top: 3rem;
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    header {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        h5 {
            max-width: 17.6875rem;

            font-size: 1.25rem;
            font-weight: 700;
            color: ${({ theme }) => theme['base-title']};
        }

        span {
            font-size: 0.875rem;
            color: ${({ theme }) => theme['base-span']};
        }
    }
    
    p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }
` 

