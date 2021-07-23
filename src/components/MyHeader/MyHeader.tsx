//---------------------------------------------------------------------------------------------
//------------------------------------Componente >> MyHeader-----------------------------------
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//---------------------------Importar dependencias y componentes-------------------------------
//---------------------------------------------------------------------------------------------
import React from "react";
import { View, Text } from 'react-native';
//-----------------------------------------Interfaz--------------------------------------------
import { Props_MyHeader } from '../../types';
//-----------------------------------------Estilos---------------------------------------------
import { styles } from './MyHeaderStyles';
//---------------------------------------------------------------------------------------------
//-----------------------------------Instancia de Componente-----------------------------------
//---------------------------------------------------------------------------------------------
const MyHeader = ({ label = '' }: Props_MyHeader) => {
    return (
        <View style={[styles.container]}>
            <Text>{label}</Text>
        </View>

    );
}
export default MyHeader;