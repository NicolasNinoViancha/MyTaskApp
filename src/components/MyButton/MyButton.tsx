//---------------------------------------------------------------------------------------------
//------------------------------------Componente >> MyButton-----------------------------------
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//---------------------------Importar dependencias y componentes-------------------------------
//---------------------------------------------------------------------------------------------
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
//-----------------------------------Librerias >> Adicionales----------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//-----------------------------------------Interfaz--------------------------------------------
import { Props_MyButton } from '../../types';
//---------------------------------------------------------------------------------------------
//-----------------------------------Instancia de Componente-----------------------------------
//---------------------------------------------------------------------------------------------
const MyButton = ({ container, text, icon, onPress }: Props_MyButton) => {

    return (
        <TouchableOpacity
            style={[container, { flexDirection: 'row' }]}
            onPress={onPress}>
            {
                text && <Text style={[text.style]}>{text.label}</Text>
            }
            {
                icon && <Icon name={icon.name} size={icon.size} color={icon.color} />
            }
        </TouchableOpacity>
    );


}
export default MyButton;