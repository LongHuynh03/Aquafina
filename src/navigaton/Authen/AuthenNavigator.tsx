import { createStackNavigator } from "@react-navigation/stack";
import { AuthenStackParamList } from "../stack/AuthenNavigation";
import Login from "../../containers/Authen/Login";
import Register from "../../containers/Authen/Register";
import SendOTP from "../../containers/Authen/SendOTP";

const Stack = createStackNavigator<AuthenStackParamList>();

export const AuthenNavigator =() => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LogIn' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='SendOTP' component={SendOTP} />
        </Stack.Navigator>
    )
}