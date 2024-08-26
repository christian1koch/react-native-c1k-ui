import { Text, TextProps } from "@tamagui/core";

interface PaddedTextProps extends TextProps {}

export function PaddedText(props: PaddedTextProps) {
	return (
		<Text backgroundColor={"white"} {...props}>
			{props.children}
		</Text>
	);
}
