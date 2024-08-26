import { config, tokens } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";
import * as themes from "./theme/theme";

const tamaguiConfig = createTamagui({ ...config, tokens, themes });

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
	interface TamaguiCustomConfig extends Conf {}
}
