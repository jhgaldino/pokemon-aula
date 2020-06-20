import React from 'react';
import { useRoute} from '@react-navigation/native';
import {View, Text,Image} from 'react-native';
import PokemonImages from '../../services/pokemonimages';
import {Container,Header, Content,Name,Type,Types,TypeName, ImageContainer} from './styles';
const Details = ()=> {
    const route = useRoute();
    const pokemon = route.params.id;
    return()=> {
    <Container>
        <Header>
        <Name>Bulbassaur</Name>
        <Types>
            <Type>
                <TypeName>Grass</TypeName>
            </Type>
            <Type>
                <TypeName>Shadow</TypeName>
            </Type>
            <Type>
                <TypeName>Water</TypeName>
            </Type>
        </Types>
        </Header>
        <Content>
            <ImageContainer>
        <Image source = {PokemonImages[1]}/>
        </ImageContainer>
        <Text>Descrição</Text>
        </Content>
    </Container>
    };
}


export default Details;