import { ChevronLeft, MoreHorizontal } from "@tamagui/lucide-icons";
import { Href, Link } from "expo-router";
import { useState } from "react";
import { Input, H2, Popover, Group, View, Button } from "tamagui";

interface HeaderNavProps {
	title: string;
	href?: Href<string>;
	onChangeText?: (text: string) => void;
	isEditable?: boolean;
	onEndEditing?: () => void;
	menuItems?: MenuItemProps[] | null;
}

export function HeaderNav({
	title,
	href,
	onChangeText,
	isEditable,
	onEndEditing,
	menuItems,
}: HeaderNavProps) {
	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const onInputEndEditing = () => {
		if (onEndEditing) {
			onEndEditing();
		}
		setIsEditingTitle(false);
	};
	return (
		<View className="items-center justify-center flex-row my-4">
			{href && !isEditingTitle && (
				<Link href={href} asChild>
					<Button
						className="absolute left-4 rounded-full w-10 h-10"
						icon={ChevronLeft}
					/>
				</Link>
			)}
			{isEditingTitle ? (
				<Input
					autoFocus
					onEndEditing={onInputEndEditing}
					defaultValue={title}
					onChangeText={onChangeText}
					enterKeyHint="done"
				/>
			) : (
				<H2
					onPress={() => {
						if (isEditable) {
							setIsEditingTitle(true);
						}
					}}
				>
					{title}
				</H2>
			)}
			{menuItems && menuItems.length > 0 && (
				<OptionsMenu menuItems={menuItems} />
			)}
		</View>
	);
}
export interface MenuItemProps {
	title: string;
	onPress: () => void;
}

interface OptionsMenuProps {
	menuItems: MenuItemProps[];
}

const OptionsMenu = ({ menuItems }: OptionsMenuProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Popover
			placement="bottom-start"
			size={"$5"}
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<Popover.Trigger asChild>
				<Button
					className="absolute right-4 rounded-full w-10 h-10"
					icon={MoreHorizontal}
					onPress={() => setIsOpen(true)}
				></Button>
			</Popover.Trigger>

			<Popover.Content
				padding="$1"
				borderColor="$borderColor"
				enterStyle={{ y: -10, opacity: 0 }}
				exitStyle={{ y: -10, opacity: 0 }}
				elevate
				animation={[
					"quick",
					{
						opacity: {
							overshootClamping: true,
						},
					},
				]}
			>
				<Popover.Arrow />

				<Group>
					{menuItems.map((menuItem) => (
						<Group.Item key={menuItem.title}>
							<Button
								onPress={() => {
									menuItem.onPress();
									setIsOpen(false);
								}}
							>
								{menuItem.title}
							</Button>
						</Group.Item>
					))}
				</Group>

				{/* ScrollView is optional, can just put any contents inside if not scrollable */}
				{/* ... */}
			</Popover.Content>
		</Popover>
	);
};
