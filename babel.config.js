module.exports = {
	presets: [
		["module:react-native-builder-bob/babel-preset", { modules: "es" }],
	],
	plugins: [
		"@tamagui/babel-plugin",
		{
			config: "./tamagui.config.ts",
			components: ["./src/ui", "./src/theme"],
		},
	],
};
