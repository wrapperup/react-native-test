import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function headerOption({ onPress, text }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
