import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Task as TTask } from "../../screens/Home";
import RoundCheckbox from "../Checkbox";
// import { CheckBox } from "@rneui/themed";

type TaskProps = {
	taskItem: TTask;
	onCheck: (taskItem: TTask) => void;
	onRemove: (taskItem: TTask) => void;
};

export function Task({ taskItem, onCheck, onRemove }: TaskProps) {
	const textDecorationLine = taskItem.done ? "line-through" : "none";
	const color = taskItem.done ? "#808080" : "#F2F2F2";

	return (
		<View style={styles.container}>
			{/* <CheckBox
				checked={taskItem.done}
				onPress={() => onCheck(taskItem)}
				containerStyle={{
					backgroundColor: "transparent",
					padding: 0,
				}}
				uncheckedColor="#4EA8DE"
				checkedColor="#5E60CE"
			/> */}
			<RoundCheckbox
				isChecked={taskItem.done}
				onPress={() => onCheck(taskItem)}
			/>
			<Text
				style={{
					...styles.description,
					textDecorationLine,
					color,
				}}
			>
				{taskItem.description}
			</Text>
			<TouchableHighlight
				style={styles.removeItem}
				onPress={() => onRemove(taskItem)}
			>
				<FontAwesome6 name="trash-can" size={16} color="#808080" />
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,

		backgroundColor: "#262626",
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#333333",
		marginTop: 8,
		minHeight: 64,
	},
	check: {
		// marginLeft: 8,
	},
	description: {
		flex: 1,
		textAlign: "left",
		paddingLeft: 4,
		color: "#F2F2F2",
		fontSize: 14,
	},
	removeItem: {
		// marginRight: 8,
	},
});
