import React from "react";

import { Input, Space } from 'antd';
import { useNavigate } from "react-router-dom";

import { 
    HeaderContainer,
    LogoContainer,
    ImgContainer,
    TitleContainer,
    NavContainer,
    SearchContainer
} from "./styles";
import Logo from '../../Assets/logoSVG.svg'


export default function Header(){

    const { Search } = Input;
    const navigate = useNavigate();

    const onSearch = (value: any) => {
        return(
            console.log(value)
        )
    };

    return(
        <HeaderContainer>
            <LogoContainer onClick={() => {navigate('/')}}>
                <ImgContainer>
                    <img  src={Logo} alt="What a Drink Web Page - Be Welcome" />
                </ImgContainer>
                <TitleContainer>
                    <p>
                        What a drink!
                    </p>
                </TitleContainer>
            </LogoContainer>
            <NavContainer>
                <ul>
                    <li onClick={() => {navigate('/')}}>HOME</li>
                    <li onClick={() => {navigate('../../pages/categories/categories')}}>CATEGORIAS</li>
                    <li onClick={() => {navigate('../../pages/drinks')}}>DRINKS</li>
                </ul>
            </NavContainer>
            <SearchContainer>
                <Space direction="vertical">
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </Space>
            </SearchContainer>
            
        </HeaderContainer>
    );
}