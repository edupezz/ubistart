import styled from "styled-components";

export const MainContainer = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;
`

export const DrinkContainer = styled.div`

    display: flex;
    justify-content: space-evenly;
`

export const DrinkImage = styled.span `

    display: flex;
    width: 40%;

    img{
        width: 100%;
    }
`

export const DrinkTitle = styled.div`

    display: flex;
    
    p{
        text-align: center;
        font-size: 2rem;
    }
`

export const DrinkInformation = styled.div`

    display: grid;
    max-height: 15vh;
    width: 15vw;
    gap: 1vh;
    grid-template-columns:  1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        "type typeText"
        "category categoryText"
        "glasstype glasstypeText"
        "instructions instructionsText"
        "measure measureText";

    
        .type{
            grid-area: type;
        }

        .typeText{
            grid-area: typeText;
        }

        .category{
            grid-area: category;
        }

        .categoryText{
            grid-area: categoryText;
        }

        .glasstype{
            grid-area: glasstype;
        }

        .glasstypeText{
            grid-area: glasstypeText;
        }

        .instructions{
            grid-area: instructions;
        }

        .instructionsText{
            grid-area: instructionsText;
        }

        .measure{
            grid-area: measure;
        }

        .measureText{
            grid-area: measureText;
        }
    
`
