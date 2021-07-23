//---------------------------------------------------------------------------------------------
//------------------------------------Tipos >> Interfaz----------------------------------------
//---------------------------------------------------------------------------------------------
import React, { Dispatch, SetStateAction } from 'react';
import { StyleProp, ViewStyle, TextStyle, KeyboardTypeOptions } from 'react-native';
//----------------------------------Interfaz >> Elembtos---------------------------------------
//----------------------------------Componente >> Icono----------------------------------------
export type Props_Icon = {
    name: string;
    size: number;
    color: string;
}
//----------------------------------Componente >> Texto----------------------------------------
export type Props_Text = {
    label: string;
    style?: StyleProp<TextStyle>;
}
//---------------------------------Componente >> TextInput-------------------------------------
export type Props_TextInput = {
    placeholder: string;
    autoCompleteType?: string;
    secureTextEntry?: boolean;
    keyboardType: KeyboardTypeOptions;
    placeholderTextColor: string;
    onChangeText: (value: string) => void;
    value: string;
    editable?: boolean;
    onFocus?: () => void;
    style: StyleProp<ViewStyle>
}
//----------------------------------Interfaz >> Componente-------------------------------------
//----------------------------------Componente >> MyHeader-------------------------------------
export type Props_MyHeader = {
    label: string;
}
//----------------------------------Componente >> MyButton-------------------------------------
export type Props_MyButton = {
    container: StyleProp<ViewStyle>;
    text?: Props_Text;
    icon?: Props_Icon;
    onPress: () => void;
}
//----------------------------------Componente >> MyTextInput----------------------------------
export type Props_MyTextInput = {
    container: StyleProp<ViewStyle>;
    icon?: Props_Icon,
    textInput: Props_TextInput,
}
//----------------------------------Component >> MySpace---------------------------------------
export type Props_MySpace = {
    container: StyleProp<ViewStyle>
}
//----------------------------------Interfaz >> Feature----------------------------------------
//----------------------------------Feauture >> FormTask---------------------------------------
export type Props_FormTask = {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    quantity: string;
    setQuantity: Dispatch<SetStateAction<string>>;

}
export type Props_Task = {
    task: string;
    quantity: number;
}
export type Props_TaskList = {
    item: Props_Task[];
    setItem: Dispatch<SetStateAction<Props_Task[]>>;
}

//C:\Program Files\AdoptOpenJDK\jdk-11.0.11.9-hotspot\bin
//npx react-native start --reset-cache