import { StyleSheet, Text, View } from "react-native";

type StatusCounter = {
	text: string;
	value: string | number;
	textColor?: string;
};

export function StatusCounter({
	text,
	value,
	textColor = "#000",
}: StatusCounter) {
	return (
		<View style={styles.container}>
			<Text style={{ ...styles.statusText, color: textColor }}>{text}</Text>
			<View style={styles.counterContainer}>
				<Text style={styles.counterText}>{value}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	statusText: {},
	counterContainer: {
		backgroundColor: "#333333",
		borderRadius: 999,
		paddingHorizontal: 8,
		paddingVertical: 2,
		textAlign: "center",
	},
	counterText: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#D9D9D9",
	},
});
