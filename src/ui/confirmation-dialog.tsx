import { AlertDialog, YStack, XStack, ButtonProps, Button } from "tamagui";

// Define the type for the props
interface AlertDialogDemoProps {
	triggerText?: string;
	title?: string;
	description?: string;
	cancelText?: string;
	acceptText?: string;
	onCancel?: () => void;
	onAccept?: () => void;

	triggerButtonProps?: ButtonProps;
}

export function ConfirmationDialog({
	triggerText = "Show Alert", // Text for the button that triggers the alert
	title = "Accept", // Title of the alert dialog
	description = "By pressing yes, you accept our terms and conditions.", // Description in the alert dialog
	cancelText = "Cancel", // Text for the cancel button
	acceptText = "Accept", // Text for the accept button
	triggerButtonProps,
	onCancel, // Function to call on cancel
	onAccept, // Function to call on accept
}: AlertDialogDemoProps) {
	return (
		<AlertDialog>
			<AlertDialog.Trigger asChild>
				<Button
					// opacity={disabledTrigger ? 0.5 : 1}
					// disabled={disabledTrigger}
					// bg={bg}
					// pressStyle={{
					// 	bg: bg,
					// 	opacity: 0.8,
					// }}
					{...triggerButtonProps}
				>
					{triggerText}
				</Button>
			</AlertDialog.Trigger>

			<AlertDialog.Portal>
				<AlertDialog.Overlay
					key="overlay"
					animation="quick"
					opacity={0.5}
					enterStyle={{ opacity: 0 }}
					exitStyle={{ opacity: 0 }}
				/>
				<AlertDialog.Content
					bordered
					elevate
					key="content"
					animation={[
						"quick",
						{
							opacity: {
								overshootClamping: true,
							},
						},
					]}
					enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
					exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
					x={0}
					scale={1}
					opacity={1}
					y={0}
				>
					<YStack space>
						<AlertDialog.Title>{title}</AlertDialog.Title>
						<AlertDialog.Description>
							{description}
						</AlertDialog.Description>

						<XStack gap="$3" justifyContent="flex-end">
							<AlertDialog.Cancel asChild>
								<Button onPress={onCancel}>{cancelText}</Button>
							</AlertDialog.Cancel>
							<AlertDialog.Action asChild>
								<Button theme="accent" onPress={onAccept}>
									{acceptText}
								</Button>
							</AlertDialog.Action>
						</XStack>
					</YStack>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog>
	);
}
