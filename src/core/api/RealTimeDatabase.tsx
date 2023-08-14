import { firebase } from "@react-native-firebase/database";

export const rtdb = firebase
.app()
.database('https://aquafina-6961c-default-rtdb.asia-southeast1.firebasedatabase.app/');