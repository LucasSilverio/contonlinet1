import styled, { css } from 'styled-components';

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

export const BtnAction = styled.button`
    padding:10px 20px 10px 20px;
    border-radius:5px;
    border:none;
    color:#FFF;
    font-weight:600;
    margin-top:30px;
    letter-spacing:1px;
    font-size:13px;
    cursor:pointer;
    background-color:${(props) => props.bgColor};

    &:hover{
        opacity:0.9;
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

    &:hover{
        color:#FFF;
    }
`;

export const Sub_h2 = styled.h2`
    text-transform:uppercase;
    font-weight:700;
    letter-spacing:0.1em;
    color:${(props) => props.color};
`;

export const PageContainer = styled.div`
    width:100%;
    display:flex;
    margin-bottom:40px;
    background-color:#FFF;
    padding-bottom:40px;

`;

export const Paragrafo = styled.p`
    font-weight:600;
    color:#666666;
    font-size:16px;
`;

export const TracoSm = styled.div`
    width:50px;
    height:2px;
    background-color:${(props) => props.color};
`;

export const Titulo = styled.h3`
    font-weight:700;
    line-height:1.5em;
    text-transform:uppercase;
    color:${(props) => props.color};
    font-size:15px;
    letter-spacing:1px;
    text-align:center;

    &:hover{
        color:#FFF;
    }
`;

export const ServicosArea = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
`;

export const Servico = styled.div`
    min-width:250px;
    width:250px;
    height:auto;
    min-height:240px;
    border:1px solid rgba(5,5,5,0.1);
    border-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    margin:10px;
    background-color:#FFF;
    cursor:pointer;

    &:hover{
        box-shadow: 0px -1px 30px 5px rgba(240, 240, 240,0.5);
        -webkit-box-shadow: 0px -1px 30px 5px rgba(240, 240, 240,0.5);
        -moz-box-shadow: 0px -1px 30px 5px rgba(240, 240, 240,0.5);
        background-color:${(props) => props.bgColor};
        color:#FFF;
        h3, p{
            color:#FFF;
        }
    }

    box-shadow: 0px -1px 30px 5px rgba(210, 210, 210,0.5);
    -webkit-box-shadow: 0px -1px 30px 5px rgba(210, 210, 210,0.5);
    -moz-box-shadow: 0px -1px 30px 5px rgba(210, 210, 210,0.5);

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