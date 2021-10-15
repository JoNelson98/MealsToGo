import React from "react";
import styled from "styled-components";
import { colors } from '../../../infrastructure/theme/colors';
import { Button, TextInput } from 'react-native-paper';
import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "https://wallpaperaccess.com/full/1410473.jpg" };
const image = require('../../../../assets/food-background.jpg');

const BackgroundContainer = styled.View`
  flex: 1;
`;

const Image = styled(ImageBackground)`
flex: 1;
justify-content: center;
`;

const StyledText = styled(Text)`
text-align: center;
font-size: 42;
`;


export const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <Image source={image}>
        <StyledText> Account Screen  </StyledText>
      </Image>
    </BackgroundContainer>
  );
};


export const AccountBackground = styled.ImageBackground.attrs({
    source: image,
})`
flex: 1;
align-items: center;
justify-content: center;
`;


export const AccountCover = styled.View`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(255,255,255,0.1);
`;



export const AccountContainer = styled.View`
padding: ${props => props.theme.space[4]};
margin-top: ${props => props.theme.space[2]};
background-color: rgba(255,255,255,0.7);
`;


export const AuthButton = styled(Button).attrs({

})`
padding: ${props => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`

`;

export const Title = styled(Text)`
font-size: 50px;
font-family: 'Facinate-Regular';
`;

export const ErrorContainer = styled.View`
max-width: 300px;
align-items: center;
align-self: center;
margin-top: ${props => props.theme.space[2]};
margin-bottom: ${props => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
width: 90%;
height: 40%;
position: absolute;
top: 30px;
padding: ${props => props.theme.space[2]} ;
`;
export const LoginAnimationWrapper = styled.View`
width: 350px;
height: 350px;
position: absolute;
/* top: 7%; */
left: 4%;
padding: ${props => props.theme.space[2]} ;
`;
export const RegisterAnimationWrapper = styled.View`
width: 100px;
height: 100px;
position: absolute;
top: 14%;
left: 35%;
padding: ${props => props.theme.space[2]} ;
`;

export const LogoWrapper = styled.View`
width: 25px;
height: 25px;
margin-left: 45%;
`;