import { remapProps } from "nativewind";
import tailWindConfig from "./ui/tailwind.config";
import { Button, Paragraph, View } from "tamagui";
remapProps(View, { className: "style" });
remapProps(Button, { className: "style" });
remapProps(Paragraph, { className: "style" });
export * from "./ui/add-button";
export * from "./ui/confirmation-dialog";
export * from "./ui/divider";
export * from "./ui/header-nav";

export const config = tailWindConfig;
