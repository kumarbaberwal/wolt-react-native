import useUserStore from "@/hooks/useUserStore";
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const { setIsGuest } = useUserStore();



  return (
    <View style={{
      marginTop: 50,
    }}>
      <Text>index</Text>
      <Button title="Guest User" onPress={() => setIsGuest(false)} />
    </View>
  )
}