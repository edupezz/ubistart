import React from "react";

import { Card, Spin } from "antd";
import { Get } from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { CategoryContainer, DrinkTypeContainer, DrinkList } from "./styles";

export default function Categories(){

    const [drinksSelected, setDrinksSelected] = React.useState<any>();
    const [categories, setCategories] = React.useState<any>();
    const [loaded, setLoaded] = React.useState<Boolean>();
    const navigate = useNavigate();
    const { Meta } = Card;
    
    const getCategories = async(): Promise<any> => {
        
        await Get('/list.php?c=list')
        .then(response =>{
            setCategories(response.data.drinks)
            setLoaded(true)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const getDrinksByCategory = async(name: any): Promise<any> => {
        await Get(`/filter.php?c=${name}`)
        .then(response =>{
            setDrinksSelected(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    React.useEffect(()=>{
        setLoaded(false)
        setDrinksSelected('')
        getCategories()
    },[])

    const listDrinks = async(e: any):Promise<any> => {
        getDrinksByCategory((e.target.innerText).split(' ').join('_'))
    }

    return(
        <>  
            {loaded 
                ?
                <CategoryContainer>
                    <DrinkTypeContainer>
                        <h1>Categorias:</h1>
                        <div className="list">
                            {categories.map((category: { strCategory:  any}): any =>{
                                return(
                                    <div style={{cursor: 'pointer'}} key={category.strCategory} onClick={(e) => listDrinks(e)}>{category.strCategory}</div>
                                )
                            })}
                        </div>
                    </DrinkTypeContainer>
                    <DrinkList>
                        {
                            (drinksSelected.drinks && loaded)
                            ?
                                drinksSelected.drinks.map((drink: any) =>{
                                    return(
                                        <Card
                                            key={drink.idDrink}
                                            hoverable={true}
                                            style={{ width: 140,  margin: "5px" }}
                                            cover={<img alt={drink.strDrink} src={drink.strDrinkThumb} />}
                                            onClick={() => {navigate(`/pages/drinkPage/${drink.idDrink}`)}}
                                        >
                                            <Meta title={drink.strDrink} description={drink.strDrink} />
                                        </Card>
                                    )
                                })
                            :
                                <div style={{ textAlign: 'center', minHeight: "200px", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div><h1>Escolha a categoria de drink ao lado.</h1></div>
                                </div>
                        }
                    </DrinkList>
                </CategoryContainer>
                :
                <div style={{ textAlign: 'center', minHeight: "200px", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spin tip="Carregando Categorias" size="large" />
                </div>
            }
        </>
    )
}