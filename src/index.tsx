import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "../tamagui.config";

export * from "./ui/add-button";
export * from "./ui/confirmation-dialog";
export * from "./ui/divider";
export * from "./ui/header-nav";

export const AppProvider = ({
	theme = "dark",
	children,
}: {
	children: any;
	theme?: string;
}) => {
	return (
		<TamaguiProvider
			config={tamaguiConfig}
			disableInjectCSS
			disableRootThemeClass
			defaultTheme={theme}
		>
			{children}
		</TamaguiProvider>
	);
};
