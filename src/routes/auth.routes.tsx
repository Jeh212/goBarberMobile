import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
	<Auth.Navigator
		screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' }
		}}

	>
		<Auth.Screen name="Signin" component={Signin} />
		<Auth.Screen name="SignUp" component={SignUp} />
	</Auth.Navigator>
);

export default AuthRoutes;
