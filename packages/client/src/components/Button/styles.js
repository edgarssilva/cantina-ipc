import styled from 'styled-components/native';


export const Container = styled.View`
  
`;

export const ButtonContainer = styled.TouchableOpacity`

`;

export const ButtonText = styled.Text`
    color: ${props => props.color || "white"};
    font-size: ${props => props.fontSize || "30px"};
    text-align: center;
    font-family: 'Inter_600SemiBold';
    background-color: #525EA6;
    border-radius: 5px;
`;
