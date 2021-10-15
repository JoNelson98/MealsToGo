import React, { useContext } from 'react';
// import { View, Text, Button, Settings } from "react-native";
import { SafeArea } from "../../../utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../restarants/components/spacer/spacer.component'
import { Text } from '../../restarants/components/typography/text.component'


const SettingsItem = styled(List.Item)`
padding: ${props => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
align-items: center;
`;



 export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);

    return (
      <SafeArea>
        <AvatarContainer>
        <Avatar.Icon size={100} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large" >
            <Text variant="label">{user.email}</Text>
        </Spacer>
        </AvatarContainer>

          <List.Section>
          <SettingsItem
              title="Favourites"
              description="View your favourites"
              left={(props) => <List.Icon {...props} color="black" icon="heart" />}
              onPress={() => navigation.navigate("Favourites")}
               />
              <SettingsItem
              title="Logout"
              left={(props) => <List.Icon {...props} color="black" icon="door" />}
              onPress={onLogout}
               />
          </List.Section>
      </SafeArea>
    );
  };