import styled from "styled-components";

export const PostList = styled.ul`
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;

    list-style: none;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    padding-bottom: 14rem;
`

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    padding: 2rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        h2 {
            font-size: 1.25rem;
            font-weight: 700;
            color: ${props => props.theme["base-title"]};
        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme["base-span"]};
        }
    }
    
`