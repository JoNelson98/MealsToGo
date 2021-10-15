import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
// import { Text, View } from 'react-native'
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  LogoWrapper,
  RegisterAnimationWrapper,
} from "../../account/components/account.styles";
import { Spacer } from "../../../features/restarants/components/spacer/spacer.component";
import { Text } from "../../../features/restarants/components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import LottieView from 'lottie-react-native'

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  console.log(error);

  return (
    <AccountBackground>
      <AccountCover>
      <RegisterAnimationWrapper>
             <LottieView 
             key="animation"
             autoPlay
             loop
             resizeMode="cover"
             source={require("../../../../assets/food-carousel.json")}
             />
             </RegisterAnimationWrapper>
        <AccountContainer
          style={{ margin: "10%", marginTop: "60%", padding: 5 }}
        >
          {/* the email */}
          <Spacer size="large">
            <AuthInput
              label="E-mail"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
            />
          </Spacer>
          {/* the password */}
          <Spacer size="large">
            <AuthInput
              label="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              secure
              onChangeText={(p) => setPassword(p)}
            />
          </Spacer>
          <Spacer size="large">
            {/* the repeat password */}
            <AuthInput
              label="Repeat Password"
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setRepeatedPassword(p)}
            />
          </Spacer>
          {/* the error statement */}
          {error && (
            <>
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
             <LogoWrapper>
             <LottieView 
             key="animation"
             autoPlay
             loop
             resizeMode="cover"
             source={require("../../../../assets/alertOctagon.json")}
             />
             </LogoWrapper>
             </>
          )}
          {/* the register button */}
          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                icon="email"
                mode="contained"
                color="black"
                onPress={() => onRegister(email, password, repeatedPassword)}
              >
                Register
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} colors={Colors.deepOrange900} />
            )}
          </Spacer>
        </AccountContainer>
        {/* back button */}
        <AuthButton
          style={{ marginLeft: "25%", maxWidth: "50%" }}
          icon="undo-variant"
          mode="contained"
          color="black"
          onPress={() => navigation.navigate("Main")}
        >
          back
        </AuthButton>
      </AccountCover>
    </AccountBackground>
  );
};
