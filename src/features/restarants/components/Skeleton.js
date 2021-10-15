import React from 'react';
import { SafeArea } from "../../../utils/safe-area.component";
import { Card } from "react-native-paper";
import { View, Text } from "react-native";
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
    Shine,
    ShineOverlay,
  } from "rn-placeholder";



export const Skeleton = () => {
    return (
        <SafeArea>
        <View style={{ padding: 16 }}>
        <Card elevation={2} style={{ height: 300, width: 350}}>
          <Placeholder Animation={Fade}>
            <PlaceholderMedia style={{ width: 350, height: 200 }} />
            <View style={{ padding: 16 }}>
              <PlaceholderLine width={30} />
              <PlaceholderLine  />
              <PlaceholderLine width={40} />
            </View>
          </Placeholder>
        </Card>
        <Card elevation={2} style={{ marginTop: 16, height: 300, width: 350}}>
          <Placeholder Animation={Fade}>
            <PlaceholderMedia style={{ width: 350, height: 200 }} />
            <View style={{ padding: 16 }}>
              <PlaceholderLine width={30} />
              <PlaceholderLine  />
              <PlaceholderLine width={40} />
            </View>
          </Placeholder>
        </Card>
        <Card elevation={2} style={{ marginTop: 16, height: 300, width: 350}}>
          <Placeholder Animation={Fade}>
            <PlaceholderMedia style={{ width: 350, height: 200 }} />
            <View style={{ padding: 16 }}>
              <PlaceholderLine width={30} />
              <PlaceholderLine  />
              <PlaceholderLine width={40} />
            </View>
          </Placeholder>
        </Card>
      </View>
      </SafeArea>
    );
}

