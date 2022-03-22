import styled from "styled-components";

export const HeaderContainer = styled.div`

    width: 100%;
    height: 10vh;
    background-color: #230312;
    display: flex;
    justify-content: space-evenly;
    
`

export const LogoContainer = styled.div`

    width: 30vw;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export const ImgContainer = styled.span`

    width: 5vw;
    height: 10vh;
    margin-left: 4vw;

    img{
        height: 100%;
    }
`

export const TitleContainer = styled.span`

    display: flex;
    align-items: flex-end;
    
    p{
        display: flex;
        align-content: center;
        font-size: 2rem;
        font-family: 'Righteous', cursive;
        color: #FF6C1A
    }
`

export const NavContainer = styled.nav`

    width: 40vw;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    align-content: space-around;
    justify-content: center;
    

    li{
        list-style: none;
        display: inline;
        margin-left: 2vh;
        font-family: 'Fredoka', sans-serif;
        color: #FFF;
        font-weight: 600;
        cursor: pointer;
    }
`

export const SearchContainer = styled.div`

    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;

`