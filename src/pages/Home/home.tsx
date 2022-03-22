import React from "react";

import { Card, Spin } from 'antd';

import { useNavigate } from 'react-router-dom';

import { Get } from "../../services/api";
import { CardContainer } from "./styles";

export default function Home(){

    const[AlcoholicDrinks, setAlcoholicDrinks] = React.useState<any[]>([]);
    const[Loaded, setLoaded] = React.useState<Boolean>(false);
    const navigate = useNavigate();
    const { Meta } = Card;
    

    const getAlcoholicDrinks = async(): Promise<any>  => {

        const params: string = '?a=Alcoholic'

        await Get(`filter.php${params}`)
        .then(response => {
            setAlcoholicDrinks(response.data.drinks)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    React.useEffect(()=>{
        setLoaded(false)
        setTimeout(() => {
            getAlcoholicDrinks()
            setLoaded(true)
        }, 2500)
        
    },[])


    let dataToshow = AlcoholicDrinks.map((drink, i) =>{
        while(i < 8) {
            return(
                <>
                    <Card
                        key={drink.idDrink}
                        hoverable={true}
                        style={{ width: 220,  margin: "5px" }}
                        cover={<img alt={drink.strDrink} src={drink.strDrinkThumb} />}
                        onClick={() => {navigate(`/pages/drinkPage/${drink.idDrink}`)}}
                    >
                        <Meta title={drink.strDrink} description={drink.strDrink} />
                    </Card>
                </>
            )
        }
    })

    return(
        <>
            {Loaded 
                ? 
                    <>
                        <CardContainer>
                            {dataToshow}
                        </CardContainer>
                    </>
                :
                    <div style={{ textAlign: 'center', minHeight: "200px", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Spin tip="Carregando Drinks" size="large" />
                    </div>
            }
        </>
    )
}
