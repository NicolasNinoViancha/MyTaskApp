import React from 'react';
import { View } from 'react-native';
//-----------------------------------------Interfaz--------------------------------------------
import { Props_MySpace } from '../../types';
//---------------------------------------------------------------------------------------------
//-----------------------------------Instancia de Componente-----------------------------------
//---------------------------------------------------------------------------------------------
const MySpace = ({ container }: Props_MySpace) => {
    return <View style={[container]} />;
}
export default MySpace;