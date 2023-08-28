import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type PureWorldProps = {};
type PureMapProps = {};
type PureCoinProps = {};
type PureChartProps = {};

export type AuthorStackParamList = {
    PureWorld: PureWorldProps| undefined, 
    PureMap: PureMapProps | undefined,
    PureCoin: PureCoinProps | undefined,
    PureChart: PureChartProps | undefined
};

export type AuthorStackNavigation = StackNavigationProp<AuthorStackParamList>;

export type S = keyof AuthorStackParamList;

export type AuthorStackScreenProps<RouterName extends S> = StackScreenProps<
    AuthorStackParamList,
    RouterName
>;