import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Header } from "../../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";
import { StatusCounter } from "../../components/StatusCounter";

export function Home() {
	const clipboard = require("../../../assets/Clipboard.png");

	return (
		<>
			<Header />

			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.inputText}
						placeholder="Adicione uma nova tarefa"
						placeholderTextColor="#808080"
					/>
					<TouchableOpacity style={styles.addButton}>
						<AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
					</TouchableOpacity>
				</View>

				<View style={styles.statusContainer}>
					<StatusCounter
						text="Criadas"
						value={10}
						textColor={styles.createdText.color}
					/>
					<StatusCounter
						text="Concluídas"
						value={8}
						textColor={styles.doneText.color}
					/>
				</View>

				<View style={styles.emptyContainer}>
					<Image source={clipboard} width={100} />
					<Text style={styles.emptyTextOne}>
						Você ainda não tem tarefas cadastradas
					</Text>
					<Text style={styles.emptyTextTwo}>
						Crie tarefas e organize seus itens a fazer
					</Text>
				</View>
			</View>
		</>
	);
}
