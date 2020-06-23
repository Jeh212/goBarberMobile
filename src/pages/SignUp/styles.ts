import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper'
import {Platform} from 'react-native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
	font-size: 20px;
	display: flex;
	color: #f4ede8;
	font-family: 'RobotoSlab-Medium';
	justify-content: center;
	margin: 64px 0 24px;
`;



export const BackToSignInText = styled.Text`
	margin-left: 16px;
	font-size: 16px;
	font-family: 'RobotSlab-Regular';
	color: #ff9000;
`;

export const BackToSignIn = styled.TouchableOpacity`
	position: absolute;
	left: 0;
	bottom: 0;
  right: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  border-color:#232129;
	background: #312e38;
	border-top-width: 1px;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
