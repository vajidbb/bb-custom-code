import React from "react";
import {Text, TouchableOpacity} from "react-native";

export const applyCustomCode = (externalCodeSetup) => {

	externalCodeSetup.authApi.setLoginButton((props) => (
		<TouchableOpacity
			onPress={() => {
				props.doLogin();
			}}
			style={{
				backgroundColor: "blue",
				padding: 10,
				borderRadius: 5,
			}}
		>
			<Text style={{color: "red", fontSize: 20}}>Custom Login Button</Text>
		</TouchableOpacity>
	));

	alert("applyCustomCode applied");

};
