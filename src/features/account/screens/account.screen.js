import React from 'react';
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper } from '../components/account.styles'
import { Button } from 'react-native-paper';
import { Spacer } from '../../../features/restarants/components/spacer/spacer.component';
import LottieView from 'lottie-react-native'


export const AccountScreen = ({ navigation }) => {

    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
            <LottieView 
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../../assets/Animation.json")}
            />
            </AnimationWrapper>
            <Title>MEALS TO GO</Title>
            <Spacer size="large" />
            <AccountContainer>
                <AuthButton icon="lock-open-outline" mode="contained" color="black" onPress={() => navigation.navigate("Login")} >
                    Login
                </AuthButton>
                <Spacer size="large" />
                <AuthButton icon="email" mode="contained" color="black" onPress={() => navigation.navigate("Register")} >
                    Register
                </AuthButton>
                <Spacer />
            </AccountContainer>
        </AccountBackground>
    )

}