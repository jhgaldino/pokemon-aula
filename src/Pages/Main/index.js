import React from 'react';
import {View , Text, Button} from 'react-native';

export default function Main(navigation) {
    return()=> {
    <View>
    <Text>Página Inicial</Text>
    <Button title='Ir para detalhes' 
    onPress={()=> navigation.navigate('Details', {id : 5 })
    } /> 
    
    </View>
    };
}
