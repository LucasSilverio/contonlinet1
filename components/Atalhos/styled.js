import styled, { css } from 'styled-components';

export const Container = styled.div`
    height:60px;
    flex:1;
    display:flex;
    flex-direction:column;

    form{
        display:flex;
        flex-direction:column;
    }

    @media (max-width:800px){
        // display:none;
    }
`;

export const Label = styled.label`
    font-size:12px;
    color:#555;
    text-align:center;
`;

export const Item = styled.div`
    width:150px;
    height:80px;
    background-color:#FFF;
    border-radius:5px;
    flex-direction:column;
    display:flex;   
    justify-content:center;
    align-items:center; 
    border:1px solid rgba(5,5,5,0.1);
    cursor:pointer;
    margin:10px;
    
    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }
`;

export const ItemsArea = styled.div`
    width:100%;
    max-width:1000px;
    display:flex;
    flex-wrap:wrap;

    @media (max-width:800px){
        flex-wrap:wrap;
    }
`;

export const ItemIcon = styled.img`
    width:30px;
    height:auto;
`;

export const TitlePage = styled.h1`
    font-size:20px;
    font-weight:bold;
    margin-left:10px;
    color:#101759;
`;