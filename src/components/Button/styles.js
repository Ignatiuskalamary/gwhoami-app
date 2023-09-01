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
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 4,
        borderRadius: 8,
        width: '100%',
    },
    title: {
        color: colors.while,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',

    }

});