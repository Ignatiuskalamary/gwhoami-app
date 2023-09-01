import { StyleSheet, Platform, StatusBar } from "react-native";
import { colors } from "../../utls/colors";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.darkGray,
        borderWidth: 1,
        borderRadius: 14,
        width: '45%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 50,
    },
    image: {
        width: 30,
        height: 30,
    },

});