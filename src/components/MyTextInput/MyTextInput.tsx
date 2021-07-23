//---------------------------------------------------------------------------------------------
//----------------------------------Componente >> MyTextInput----------------------------------
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//---------------------------Importar dependencias y componentes-------------------------------
//---------------------------------------------------------------------------------------------
import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
//-------------------------------------Librerias Adicionales-----------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//-----------------------------------------Estilos---------------------------------------------
import { styles } from './MyTextInputStyles';
//-----------------------------------------Interfaz--------------------------------------------
import { Props_MyTextInput } from '../../types';
//---------------------------------------------------------------------------------------------
//-----------------------------------Instancia de Componente-----------------------------------
//---------------------------------------------------------------------------------------------
const MyTextInput = ({ container, icon, textInput }: Props_MyTextInput) => {
    const WIDHT_TEXT_INPUT = icon ? 0.8 : 1;
    return (
        <View style={[container, { flexDirection: 'row' }]}>
            {icon &&
                <View style={[styles.containerIcon]}>
                    <Icon name={icon.name} size={icon.size} color={icon.color} />
                </View>
            }
            <TextInput
                placeholder={textInput.placeholder}
                autoCompleteType={'off'}
                secureTextEntry={textInput.secureTextEntry}
                keyboardType={textInput.keyboardType}
                placeholderTextColor={textInput.placeholderTextColor}
                onChangeText={textInput.onChangeText}
                value={textInput.value}
                onFocus={textInput.onFocus}
                style={[textInput.style, { flex: WIDHT_TEXT_INPUT }]} />
        </View>
    );
}
export default MyTextInput;
