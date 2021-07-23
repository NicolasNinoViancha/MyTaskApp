//---------------------------------------------------------------------------------------------
//------------------------------------Componente >> FormTask-----------------------------------
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//---------------------------Importar dependencias y componentes-------------------------------
//---------------------------------------------------------------------------------------------
import React, { Fragment } from 'react';
import { View } from 'react-native';
//---------------------------------------Componentes-------------------------------------------
import MyTextInput from '../../../components/MyTextInput';
import MySpace from '../../../components/MySpace';
//-----------------------------------------Interfaz--------------------------------------------
import { Props_FormTask } from '../../../types';
//-----------------------------------------Estilos---------------------------------------------
import { styles } from '../styles/TaskStyles';
import { letters, colors, iconsSize } from '../../../styles';
//---------------------------------------------------------------------------------------------
//-----------------------------------Instancia de Componente-----------------------------------
//---------------------------------------------------------------------------------------------
const FormTask = ({ name, setName, quantity, setQuantity }: Props_FormTask) => {
    //-----------------------------------------------------------------------------------------
    //--------------------------------Declaracion >> Componente--------------------------------
    //-----------------------------------------------------------------------------------------
    return (
        <Fragment>
            <MySpace container={{ width: '100%', flex: 0.02 }} />
            <MyTextInput
                container={[styles.ctnTextInput]}
                icon={{ name: 'clipboard-list-outline', size: iconsSize.medium, color: colors.Black }}
                textInput={{
                    placeholder: 'Ingrese Tarea',
                    autoCompleteType: 'off',
                    secureTextEntry: false,
                    keyboardType: 'default',
                    placeholderTextColor: colors.Black + 'AF',
                    onChangeText: (value) => setName(value),
                    value: name,
                    editable: true,
                    style: styles.textInput
                }} />
            <MySpace container={{ width: '100%', flex: 0.02 }} />
            <MyTextInput
                container={[styles.ctnTextInput]}
                icon={{ name: 'numeric', size: iconsSize.medium, color: colors.Black }}
                textInput={{
                    placeholder: 'Ingrese Cantiadad',
                    autoCompleteType: 'off',
                    secureTextEntry: false,
                    keyboardType: 'default',
                    placeholderTextColor: colors.Black + 'AF',
                    onChangeText: (value) => setQuantity(value),
                    value: quantity,
                    editable: true,
                    style: styles.textInput
                }} />
            <MySpace container={{ width: '100%', flex: 0.02 }} />
        </Fragment>
    );


}
export default FormTask;