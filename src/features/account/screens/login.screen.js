import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import LottieView from 'lottie-react-native'
// import { Text, View } from 'react-native'
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  LogoWrapper,
  LoginAnimationWrapper,
} from "../../account/components/account.styles";
import { Spacer } from "../../../features/restarants/components/spacer/spacer.component";
import { Text } from "../../../features/restarants/components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { isLoaded } from "expo-font";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  console.log(error);

  return (
    <AccountBackground>
      <AccountCover>
      <LoginAnimationWrapper>
             <LottieView 
             key="animation"
             autoPlay
             loop
             resizeMode="cover"
             source={require("../../../../assets/junk-food.json")}
             />
             </LoginAnimationWrapper>
        <AccountContainer
          style={{ margin: "10%", marginTop: "60%", padding: 5 }}
        >
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
              source={require("../../../../assets/alertOctagon.json")}
             />
            </LogoWrapper>
            </>
          )}
          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                color="black"
                onPress={() =>
                  onLogin(email, password)
                }
              >
                Login
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={Colors.deepOrange900} />
            )}
          </Spacer>
        </AccountContainer>
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
