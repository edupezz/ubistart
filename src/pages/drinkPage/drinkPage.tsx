import React from "react";

import { Get } from "../../services/api";

import { useParams } from "react-router-dom";

import { MainContainer, DrinkContainer, DrinkImage, DrinkTitle, DrinkInformation } from "./styles";

import { ApiContext } from "../../providers/api";


export default function DrinkPage(){

    const pathParams: any = useParams();
    const drinkID: any = pathParams.id

    const  api  = React.useContext(ApiContext)

    const [drinkData, setDrinkData] = React.useState<any>({
        name: String,
        type: String,
        category: String,
        thumb: String,
        glassType: String,
        instructions: String,
        measure: String,
    });

    const getSpecificDrinkByID = async(): Promise<any> => {

        await Get(`${api}/lookup.php?i=${drinkID}`)
        .then(response =>{
                
            setDrinkData({
                id: drinkID,
                name: response.data.drinks[0].strDrink,
                type: response.data.drinks[0].strAlcoholic,
                category: response.data.drinks[0].strCategory,
                thumb: response.data.drinks[0].strDrinkThumb,
                glassType: response.data.drinks[0].strGlass,
                instructions: response.data.drinks[0].strInstructions,
                measure: response.data.drinks[0].strMeasure1
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }

    React.useEffect(() => {
        getSpecificDrinkByID()
    })

    console.log(api)

    return(
        <MainContainer>
            <DrinkContainer>
                <DrinkImage><img src={drinkData.thumb} alt={drinkData.name} /></DrinkImage>

                <DrinkTitle><p>{drinkData.name}</p></DrinkTitle>
                <DrinkInformation>
                    <div className="type">Type:</div>
                    <div className="typeText">{drinkData.type}</div>
                    <div className="category">Category:</div>
                    <div className="categoryText">{drinkData.category}:</div>
                    <div className="glasstype">Glass Type:</div>
                    <div className="glasstypeText">{drinkData.glassType}</div>
                    <div className="instructions">Instructions:</div>
                    <div className="instructionsText">{drinkData.instructions}</div>
                    <div className="measure">Measure</div>
                    <div className="measureText">{drinkData.measure}</div>
                </DrinkInformation>

            </DrinkContainer>
        </MainContainer>
    )

}