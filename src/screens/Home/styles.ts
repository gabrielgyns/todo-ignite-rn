import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1A1A1A",
		height: "100%",
		paddingHorizontal: 24,
	},
	inputContainer: {
		flexDirection: "row",
		marginTop: -26,
	},
	inputText: {
		height: 54,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#0D0D0D",
		borderRadius: 5,
		padding: 16,
		fontSize: 16,
		color: "#F2F2F2",
		backgroundColor: "#262626",
		flex: 1,
	},
	addButton: {
		width: 52,
		height: 52,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
		marginLeft: 5,
		backgroundColor: "#1E6F9F",
	},
	addButtonText: {
		color: "#F2F2F2",
		fontSize: 24,
	},
	statusContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 32,
		paddingBottom: 20,
		color: "#4EA8DE",
		borderBottomWidth: 1,
		borderColor: "#333333",
	},
	createdText: {
		color: "#4EA8DE",
	},
	doneText: {
		color: "#8284FA",
	},
	emptyContainer: {
		flex: 1,
		marginTop: 48,
		alignItems: "center",
	},
	emptyTextOne: {
		color: "#808080",
		fontWeight: "bold",
		marginTop: 16,
		marginBottom: 5,
	},
	emptyTextTwo: {
		color: "#808080",
	},
});
