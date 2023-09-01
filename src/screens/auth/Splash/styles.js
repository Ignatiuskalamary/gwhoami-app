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
import { colors } from "../../../utls/colors";

export const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: colors.while,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image: {
        width: '100%',
        height: 200,
    },
    titleContainer: {
        marginVertical: 54,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: 'underline',
    },
    footerText: {
        color: colors.lightBlack,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
    }
});