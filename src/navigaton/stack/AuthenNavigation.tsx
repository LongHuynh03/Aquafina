import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type LoginProps = {
};

type SendOTPProps = {
    phone: string,
};

type RegisterProps = {
};

export type AuthenStackParamList = {
    LogIn: LoginProps | undefined; 
    SendOTP: SendOTPProps | undefined;
    Register: RegisterProps | undefined;
};

export type AuthenStackNavigation = StackNavigationProp<AuthenStackParamList>;

export type S = keyof AuthenStackParamList;

export type AuthenStackScreenProps<RouterName extends S> = StackScreenProps<
    AuthenStackParamList,
    RouterName
>;