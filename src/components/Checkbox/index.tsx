import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RoundCheckbox = ({
	isChecked,
	onPress,
}: {
	isChecked: boolean;
	onPress: () => void;
}) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
			<View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
				{isChecked && <Ionicons name="checkmark" size={18} color="white" />}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	checkboxContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	checkbox: {
		width: 24,
		height: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: "#4EA8DE",
		backgroundColor: "transparent",
		justifyContent: "center",
		alignItems: "center",
	},
	checkedCheckbox: {
		borderColor: "#5E60CE",
		backgroundColor: "#5E60CE",
	},
});

export default RoundCheckbox;
