import React from 'react';
import { View } from 'react-native';
import { PlateTitle, Type, PlateType, ProductIn, TypeContainer, ProdContainer, AlContainer, MainContainer, TextProducts } from './styles';

const Plate = ({ plateTitle, plateType, textProducts, alProducts, kcal }) => {
    return (
        <MainContainer>
            <PlateTitle>{plateTitle}</PlateTitle>
            <TypeContainer>
                <Type>Tipo:</Type>
                <PlateType>{plateType}</PlateType>
            </TypeContainer>
            <ProdContainer>
                <TextProducts><ProductIn>Produtos: </ProductIn>{textProducts}</TextProducts>
            </ProdContainer>
            <AlContainer>
                <TextProducts><ProductIn>Pode conter Alergénicos: </ProductIn>{alProducts}</TextProducts>
            </AlContainer>
            <AlContainer>
                <TextProducts><ProductIn>Valor Calórico: </ProductIn>{kcal}</TextProducts>
            </AlContainer>
        </MainContainer>
    );
};

export default Plate;
