import { createStackNavigator } from "@react-navigation/stack";
import { AuthenStackParamList } from "../stack/AuthenNavigation";
import { AuthorStackParamList } from "../stack/AuthorNavigation";
import PureWorld from "../../containers/Author/PureWorld";
import PureMap from "../../containers/Author/PureMap";
import PureCoin from "../../containers/Author/PureCoin";
import PureChart from "../../containers/Author/PureChart";

const Stack = createStackNavigator<AuthorStackParamList>();

export const AuthorNavigator =() => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='PureWorld' component={PureWorld} />
            <Stack.Screen name='PureMap' component={PureMap} />
            <Stack.Screen name='PureCoin' component={PureCoin} />
            <Stack.Screen name='PureChart' component={PureChart} />
        </Stack.Navigator>
    )
}