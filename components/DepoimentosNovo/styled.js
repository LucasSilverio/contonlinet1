import styled, { css } from 'styled-components';

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

export const BtnAction = styled.button`
    width:350px;
    height:60px;
    background-color:#F2A57C;
    border:none;
    border-radius:20px;
    color:#FFF;
    font-weight:800;
    font-family:arial;
    margin-top:20px;
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
    margin-top:20px;
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

    @media (max-width:999px){
        padding:20px;
    }
`;

export const Detalhes = styled.a`
    font-weight:700;
    margin-top:20px;
    margin-bottom:20px;

`;

export const Empresa = styled.p`
    font-size:17px;
    color:#716FF2;
    text-align:center;
    font-weight:700;
`;

export const Icone = styled.img`
    width:100px;
`;

export const Lk = styled.a`
    padding:10px 20px 10px 20px;
    border-radius:5px;
    border:none;
    color:#FFF;
    font-weight:600;
    margin-top:30px;
    letter-spacing:1px;
    font-size:13px;
    cursor:pointer;
    background-color:#005a48;

    &:hover{
        opacity:0.9;
    }
`;

export const Descricao = styled.p`
    font-size:17px;
    color:#888;
    text-align:center;
    
`;

export const Sub_h2 = styled.h2`
    text-transform:uppercase;
    font-weight:500;
    letter-spacing:0.1em;
    color:#333;
`;

export const PageContainer = styled.div`
    width:100%;
    display:flex;
    margin-bottom:40px;

`;

export const Paragrafo = styled.p`
    font-weight:600;
    color:#666666;
    font-size:16px;
`;

export const TracoSm = styled.div`
    width:50px;
    height:2px;
    background-color:#333;
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

export const Servico = styled.div`
    min-width:300px;
    width:270px;
    height:390px;
    border:1px solid rgba(250,250,250,0.1);
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    margin:10px;
    background-color:#FFF;
    cursor:pointer;

    box-shadow: 0px -1px 4px -1px rgba(5,5,5,0.2);
    -webkit-box-shadow: 0px -1px 4px -1px rgba(5,5,5,0.2);
    -moz-box-shadow: 0px -1px 4px -1px rgba(5,5,5,0.2);

    &:hover{
        box-shadow: 0px -1px 20px 4px rgba(5,5,5,0.2);
        -webkit-box-shadow: 0px -1px 20px 4px rgba(5,5,5,0.2);
        -moz-box-shadow: 0px -1px 20px 4px rgba(5,5,5,0.2);
        transform:{
            scale:1.1;
        }

        a, h3{
            color:${(props) => props.color+'!important'};
        }
    }

    @media (max-width:580px){
        width:100%;
        height:auto;
    }
`;

export const BannerArea = styled.div`
    height:460px;
    max-width:100%;
    width:auto;
    overflow:hidden;
    cursor:pointer;
    

    img {
        width:100%;
        height:auto;
    }
`;