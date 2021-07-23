//---------------------------------------------------------------------------------------------
//-----------------------------------Contenedor >> TaskScreen----------------------------------
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//---------------------------Importar dependencias y componentes-------------------------------
//---------------------------------------------------------------------------------------------
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
//-------------------------------------Componentes---------------------------------------------
import MyHeader from '../../../components/MyHeader';
import MyButton from '../../../components/MyButton';
import FormTask from '../components/FormTask';
//----------------------------------------Estilos----------------------------------------------
import { styles } from '../styles/TaskStyles';
import { colors, letters } from '../../../styles';
//---------------------------------------Interfaces--------------------------------------------
import { Props_Text, Props_Task } from '../../../types';
const Task = () => {
    //-----------------------------------------------------------------------------------------
    //------------------------------------Instancia >> Estados---------------------------------
    //-----------------------------------------------------------------------------------------
    //--------------------------------------Estados >> Tarea-----------------------------------
    const [taskName, SetTaskname] = useState('');//Nombre.
    const [taskQuantity, setTaskQuantity] = useState('');//Cantiadad.

    const [taskList, setTaskList] = useState<Props_Task[]>([]);
    //-----------------------------------------------------------------------------------------
    //-----------------------------------Instancia >> Componente-------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------Componente >> MyLabel---------------------------------
    //Descripcion : Renderiza un titulo del cuerpo de pantalla.
    const MyLabel = ({ label = '' }: Props_Text) => (
        <View style={[styles.ctnLabel]}>
            <Text style={[styles.title, { color: colors.Black }]}>{label}</Text>
        </View>
    );
    //-----------------------------------------------------------------------------------------
    //-----------------------------------Instancia >> Screen-----------------------------------
    //-----------------------------------------------------------------------------------------
    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar animated={true} backgroundColor={colors.White} barStyle={'dark-content'} />
            <MyHeader label={'Shopping List'} />
            <MyLabel label={'Add Shopping Item'} />
            <FormTask
                name={taskName}
                setName={SetTaskname}
                quantity={taskQuantity}
                setQuantity={setTaskQuantity} />
            <MyButton
                container={[styles.button]}
                //icon={{ name: 'star-outline', size: 40, color: colors.White }}
                text={{ label: 'Agregar Tarea', style: [styles.title, { color: colors.White }] }}
                onPress={() => console.log('Task >> Name : ', taskName, ' Cantidad :', taskQuantity)} />
        </SafeAreaView>
    );
}
export default Task;