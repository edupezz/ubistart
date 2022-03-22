import styled from "styled-components";

export const CategoryContainer = styled.div`

    width: 100%;
    display: flex;
    flex-flow: row nowrap;
`

export const DrinkTypeContainer = styled.div`

    width: 50%;
    
    h1{
        text-align: center;
        margin-top: 1vh;
    }

    .list{
        margin-top: 5vh;
        padding-left: 7vh;
        line-height: 4vh;
        font-size: 1.5rem;
    }
`

export const DrinkList = styled.div`

    width: 50%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    overflow-y: auto;
    padding: .5vh;
    cursor: pointer;
`