import styled from 'styled-components'

import BgImg from "../../assets/bg.png"

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;

    background: ${() => `url(${BgImg}) no-repeat center`};
    background-size: cover;

    display: flex;
    justify-content: center;

    padding-top: 4rem;

    img {
        width: 9.25rem;
        height: 6.125rem;
    }
`