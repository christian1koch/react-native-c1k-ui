import classNames from "classnames";
import React from "react";
import { View, ViewProps } from "react-native";

interface DividerProps extends ViewProps {
	horizonal?: boolean;
}

export const Divider: React.FC<DividerProps> = (props) => {
	const orientationStyles = {
		horizontal: "h-1 border-b",
		vertical: "w-1 border-r",
	};

	const orientation = props.horizonal ? "horizontal" : "vertical";
	return (
		<View
			className={classNames(
				props.className,
				orientationStyles[orientation],
				" border-slate-500"
			)}
			{...props}
		/>
	);
};
