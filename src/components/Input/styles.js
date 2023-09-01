// import { StyleSheet } from "react-native";
// export const styles = StyleSheet.create({
//     container: {
//         padding: 24,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100%'
//     },
//     image: {
//         width: '100%',
//         height: 200,
//     },
//     titleContainer: {
//         marginVertical: 54,
//     },
//     title: {
//         fontSize: 40,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     innerTitle: {
//         color: "#FFF",
//         textDecorationLine: 'underline',
//     },
//     footerText: {
//         color: "#OOO",
//         textAlign: 'center',
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginTop: 30,
//     },
//     buttonCont: { width: '100%', flexDirection: 'row' },
// });

import { StyleSheet, Platform, StatusBar } from "react-native";
import { colors } from "../../utls/colors";

export const styles = StyleSheet.create({

    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        //borderColor: 'yellow',
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },

});