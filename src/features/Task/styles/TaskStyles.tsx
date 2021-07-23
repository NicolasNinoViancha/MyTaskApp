//---------------------------------------------------------------------------------------------
//-------------------------------------Estilos >> Screen---------------------------------------
//---------------------------------------------------------------------------------------------
import { StyleSheet } from 'react-native';
import { colors, letters } from '../../../styles';
export const styles = StyleSheet.create({
    //Estilo >> Contenedor
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.White
    },
    //Estilo >> Contenedor Label
    ctnLabel: {
        flex: 0.1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '5%'
    },
    //Estilo >> Texto
    title: {
        color: colors.Black,
        fontSize: letters.medium,
    },
    //Estilo >> Contenedor TextInput
    ctnTextInput: {
        flex: 0.06,
        width: '80%',
        borderWidth: 2,
        borderColor: colors.Black,
        borderRadius: 15,

    },
    //Estilo >> TextInput
    textInput: {
        fontSize: letters.medium,
        color: colors.Black,
        backgroundColor: 'transparent',
    },
    //Estilo >> Boton
    button: {
        flex: 0.08,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Black,
        elevation: 10,
        borderRadius: 10
    }
});