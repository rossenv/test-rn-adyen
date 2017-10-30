/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';

import adyenEncrypt from 'adyen-cse-js';

const key =
	'10001|80C7821C961865FB4AD23F172E220F819A5CC7B9956BC3458E2788' +
	'F9D725B07536E297B89243081916AAF29E26B7624453FC84CB10FC7DF386' +
	'31B3FA0C2C01765D884B0DA90145FCE217335BCDCE4771E30E6E5630E797' +
	'EE289D3A712F93C676994D2746CBCD0BEDD6D29618AF45FA6230C1D41FE1' +
	'DB0193B8FA6613F1BD145EA339DAC449603096A40DC4BF8FACD84A5D2CA5' +
	'ECFC59B90B928F31715A7034E7B674E221F1EB1D696CC8B734DF7DE2E309' +
	'E6E8CF94156686558522629E8AF59620CBDE58327E9D84F29965E4CD0FAF' +
	'A38C632B244287EA1F7F70DAA445D81C216D3286B09205F6650262CAB415' +
	'5F024B3294A933F4DC514DE0B5686F6C2A6A2D';
const cseInstance = adyenEncrypt.createEncryption(key, {});

const cardData = {
	number: '4024007140322438',
	cvc: '691',
	holderName: 'John Holder',
	expiryMonth: '12',
	expiryYear: '2019',
	generationtime: new Date().toISOString(),
};

setTimeout(() => {
	const crypt = cseInstance.encrypt(cardData);
	Alert.alert('crypt: ', crypt);
}, 2000);

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				<Text style={styles.instructions}>{instructions}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
