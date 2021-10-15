import React from 'react';
import SafeArea from '../../../utils/safe-area.component';

import { View, Text } from "react-native";

export function MapScreen() {
    return (
        <SafeArea>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Map!</Text>
        </View>
        </SafeArea>
    );
}


