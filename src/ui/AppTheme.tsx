import { config, tokens } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";
import * as themes from "./../../theme/theme";

export const tamaguiConfig = createTamagui({ ...config, tokens, themes });
