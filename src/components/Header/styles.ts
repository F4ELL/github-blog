import styled from "styled-components";
import bgHeader from '../../assets/bg-header.png'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;
    background: url(${bgHeader});
    background-position: center;
    background-size: cover;
    padding: 4rem 0 8.375rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
`