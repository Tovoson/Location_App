import { StyleSheet } from "react-native";
import { COLORS, PADDING, TEXT_SIZE } from "../../outils/constante";


const dashboardStyle = StyleSheet.create({
    header:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: PADDING.horizantal,
        paddingVertical: PADDING.vertical
    },
    userImage: {
        borderRadius: 50,
        width: 50,
        height: 50
    },
    userNom: {
        fontSize: 16,
        // color: COLORS.black
    }
})

export default dashboardStyle