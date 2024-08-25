import React, { type ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  type GestureResponderEvent,
  type ViewStyle,
  type TextStyle,
} from "react-native";

interface Props {
  disabled?: boolean;
  color?: string;
  buttonStyles?: ViewStyle;
  textStyles?: TextStyle;
  accessibilityLabel?: string;
  onPress: (event: GestureResponderEvent) => void;
  children?: ReactNode;
}

const AppButton: React.FC<Props> = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: props.disabled
            ? "#ccc"
            : pressed
            ? "#aa0000"
            : props.color || "red",
        },
        styles.container,
        props.buttonStyles,
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || "A Button"}
    >
      <Text style={[styles.text, props.textStyles]}>
        {props.children || "Press Me"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: "center",
    borderRadius: 8,
  },
  text: { color: "white" },
});

export default AppButton;
