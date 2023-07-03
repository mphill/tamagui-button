import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";

import { useColorScheme } from "react-native";

import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from "tamagui";
import config from "./tamagui.config";
import { Button } from "./button";
export default function App() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	});
	if (!loaded) {
		return null;
	}
	return (
		<TamaguiProvider config={config}>
			<Theme name={colorScheme === "dark" ? "dark" : "light"}>
				<YStack f={1} backgroundColor={"$backgroundSoft"}>
					<Spacer size={80} />

					<Button>Test</Button>

					<StatusBar style="auto" />
				</YStack>
			</Theme>
		</TamaguiProvider>
	);
}
