import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "../../tamagui.config";

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
