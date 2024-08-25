import { Plus } from "@tamagui/lucide-icons";
import { View } from "react-native";
import { Button, ButtonProps } from "tamagui";

interface AddButtonProps extends ButtonProps {
	onPress: () => void;
	text?: string;
}
export default function AddButton({ onPress, text, ...rest }: AddButtonProps) {
	return (
		<View className="flex-1 mx-6">
			<Button onPress={onPress} icon={Plus} {...rest}>
				{text}
			</Button>
		</View>
	);
}
