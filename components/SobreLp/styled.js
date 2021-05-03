import styled, { css } from 'styled-components';

export const BtnAction = styled.button`
    width:350px;
    height:60px;
    background-color:#F2A57C;
    border:none;
    border-radius:20px;
    color:#FFF;
    font-weight:800;
    font-family:arial;
    margin-top:10px;
    margin-bottom:20px;
    display:block;

    @media (max-width:499px){
        display:none;
    }


    small{
        font-size:13px;
        font-weight:700;
    }

    &:hover {
        opacity:0.8;
        cursor:pointer;
    }
`;

export const BtnActionMob = styled.button`
    width:350px;
    height:60px;
    background-color:#F2A57C;
    border:none;
    border-radius:20px;
    color:#FFF;
    font-weight:800;
    font-family:arial;
    margin-top:10px;
    margin-bottom:20px;
    display:none;

    @media (max-width:499px){
        display:block;
    }

    small{
        font-size:13px;
        font-weight:700;
    }

    &:hover {
        opacity:0.8;
        cursor:pointer;
    }
`;

export const Container = styled.div`
    max-width:1100px;
    width:100%;
    margin:auto;
    padding-top:50px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding:10px;

    @media (max-width:999px){
        padding:20px;
    }
`;

export const Column = styled.div`
    display:flex;
    width:500px;
    flex-direction:column;

    @media (max-width:499px){
        width:100%;
    }

`;

export const Img = styled.img`
    width:400px;

    @media (max-width:499px){
        width:100%;
    }

`;

export const Descricao = styled.p`
    font-size:17px;
    color:#FFF;
    
`;

export const PageContainer = styled.div`
    width:100%;
    display:flex;
    margin-bottom:40px;
    background-color:#716FF2;

`;

export const Titulo = styled.h3`
    font-weight:700;
    line-height:1.5em;
    text-transform:uppercase;
    color:#716FF2;
    font-size:18px;
    letter-spacing:1px;
    text-align:center;

    &:hover{
        opacity:0.8;
    }
`;

export const ServicosArea = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
`;

export const SubTitle = styled.h2`
    text-align:center;
    color:${(props) => props.dark ? '#716FF2' : '#FFF'};
    font-size:32px;
    font-weight:700;
    max-width:800px;

    a {
        text-decoration:underline;
        color:#F2A57C;
    }
`;
