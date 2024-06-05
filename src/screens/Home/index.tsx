import {
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
	Keyboard,
	FlatList,
	Alert,
} from "react-native";
import { Header } from "../../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";
import { StatusCounter } from "../../components/StatusCounter";
import { useState } from "react";
import { Task } from "../../components/Task";

export type Task = {
	description: string;
	done: boolean;
	createdAt: Date;
};

export function Home() {
	const [task, setTask] = useState<string>("");
	const [taskList, setTaskList] = useState<Task[]>([]);

	const handleAddTask = () => {
		const item: Task = {
			description: task,
			done: false,
			createdAt: new Date(),
		};

		setTaskList((prevList) => [...prevList, item]);
		setTask("");
		Keyboard.dismiss();
	};

	const handleRemoveTask = (taskItem: Task) => {
		Alert.alert(
			"Remover",
			`Deseja remover a tarefa: "${taskItem.description}"?`,
			[
				{
					text: "Sim",
					onPress: () => {
						setTaskList((prevState) => {
							const newState = prevState.filter(
								(item) => item.createdAt !== taskItem.createdAt
							);
							return newState;
						});
						Alert.alert("Removido!");
					},
				},
				{
					text: "Não",
					style: "cancel",
				},
			]
		);
	};

	const handleOnCheck = (taskItem: Task) => {
		const newItem = taskList.map((item) => {
			if (item.createdAt === taskItem.createdAt) {
				return {
					...item,
					done: !item.done,
				};
			}

			return item;
		});

		setTaskList(newItem);
	};

	const clipboard = require("../../../assets/Clipboard.png");

	const createdCount = taskList.length;
	const doneCount = taskList.reduce((acc, curr) => {
		if (curr.done) {
			return acc + 1;
		}

		return acc;
	}, 0);

	return (
		<>
			<Header />

			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.inputText}
						placeholder="Adicione uma nova tarefa"
						placeholderTextColor="#808080"
						value={task}
						onChangeText={setTask}
					/>
					<TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
						<AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
					</TouchableOpacity>
				</View>

				<View style={styles.statusContainer}>
					<StatusCounter
						text="Criadas"
						value={createdCount}
						textColor={styles.createdText.color}
					/>
					<StatusCounter
						text="Concluídas"
						value={doneCount}
						textColor={styles.doneText.color}
					/>
				</View>

				<FlatList
					data={taskList}
					keyExtractor={(item) =>
						item.description.concat(item.createdAt.toUTCString())
					}
					renderItem={({ item }) => (
						<Task
							taskItem={item}
							onCheck={handleOnCheck}
							onRemove={handleRemoveTask}
						/>
					)}
					ListEmptyComponent={
						<View style={styles.emptyContainer}>
							<Image source={clipboard} width={100} />
							<Text style={styles.emptyTextOne}>
								Você ainda não tem tarefas cadastradas
							</Text>
							<Text style={styles.emptyTextTwo}>
								Crie tarefas e organize seus itens a fazer
							</Text>
						</View>
					}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</>
	);
}
