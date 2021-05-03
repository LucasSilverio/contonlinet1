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
    background-color:#005a48;

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

export const Descricao = styled.p`
    font-size:17px;
    color:#888;
    text-align:center;
`;

export const Img = styled.img`
    width:290px;
    height:auto;
    border-radius:5px;
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
    margin-bottom:100px;

`;

export const Paragrafo = styled.p`
    font-weight:600;
    color:#666666;
    font-size:16px;
    text-align:center;
`;

export const TracoSm = styled.div`
    width:50px;
    height:2px;
    background-color:${(props) => props.color};
`;

export const Titulo = styled.h3`
    font-weight:600;
    line-height:1.5em;
    text-transform:uppercase;
    color:${(props) => props.color};
    font-size:15px;
    letter-spacing:1px;
`;

export const ItensArea = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
`;

export const Item = styled.div`
    width:300px;
    height:auto;
    min-height:410px;
    display:flex;
    flex-direction:column;
    background-color:#FFF;
    align-items:center;
    margin:10px;
    border:1px solid rgba(5,5,5,0.1);
    border-radius:5px;
    cursor:pointer;

    &:hover{
        box-shadow: 0px -1px 12px -1px rgba(5,5,5,0.2);
        -webkit-box-shadow: 0px -1px 12px -1px rgba(5,5,5,0.2);
        -moz-box-shadow: 0px -1px 12px -1px rgba(5,5,5,0.2);
        opacity:0.8;
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