import { Button as TButton, styled } from "tamagui";

export const Button = styled(TButton, {
	fontWeight: "700",
	textTransform: "uppercase",
	height: 40,
	borderRadius: 20,

	variants: {
		primary: {
			true: {
				backgroundColor: "$primary",
				color: "$white",
				pressStyle: {
					backgroundColor: "$primary",
				},
			},
		},
		outlined: {
			true: {
				backgroundColor: "$dark",
				borderWidth: 1,
				borderColor: "$white",
				color: "$white",
			},
		},
		danger: {
			true: {
				backgroundColor: "$red",
				color: "$white",
			},
		},
		slim: {
			true: {
				height: 24,
				borderRadius: 12,
				alignSelf: "center",
			},
		},
	} as const,
});
