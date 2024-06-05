import { Image, StyleSheet, View } from "react-native";

export function Header() {
	const logo = require("../../../assets/Logo.png");
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={logo} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 200,
		backgroundColor: "#0D0D0D",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		marginTop: 30,
		width: 111,
		height: 32,
	},
});
