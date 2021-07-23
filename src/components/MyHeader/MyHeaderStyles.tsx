//---------------------------------------------------------------------------------------------
//-------------------------------------Estilos >> Componente-----------------------------------
//---------------------------------------------------------------------------------------------
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    //Estilo >> Contenedor
    container: {
        flex: 0.1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: colors.Black + '0F',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    //Estilo >> Texto
    label: {
        color: colors.White,
        fontSize: 15
    }
});