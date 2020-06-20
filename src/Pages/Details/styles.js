import styled from 'styled-components';

export const Container = styled.View`
flex : 1;
background-color : #49d0b0; 
justify-content: space-between;
padding-top: 30px;
`;

export const Header = styled.View`
flex : 1;
margin-left:30px;
margin=right:30px;

`;

export const Name = styled.Text`
color : #FFF;
font-size:35px;
font-weight:bold;
margin-top:50px;
`;
export const Types = styled.View`



`;

export const Type = styled.View`
background-color : rgb(0,0,0,0.15);
border-radius:20px;
align-itens: center;
justify-content:center;
height:20px;
paddinf-left:20px;
padding-right:20px;
margin-left:30px;
`;

export const TypeName = styled.Text`
color: #FFF;


`;
export const ImageContainer = styled.View`
width: 160px;
height:160px;
position:absolute;
alignSelf:center;
top:-100px;

`;


export const Content = styled.View`
background-color : #FFF;
height: 50%;
flex : 1;
border-top-left-radius : 30px;
border-top-right-radius : 30px;
padding:30px;

`;
