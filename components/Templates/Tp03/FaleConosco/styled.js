import styled, { css } from 'styled-components';

export const Autor = styled.p`
    padding:0;
    color:#555;
    font-size:13px;
`;

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

export const BtnAction = styled.button`
    padding:10px 20px 10px 20px;
    height:50px;
    width:250px;
    margin:5px;
    border-radius:5px;
    border:none;
    color:#fff;
    font-weight:400;
    margin-top:30px;
    letter-spacing:1px;
    font-size:13px;
    cursor:pointer;
    background-color:#3B4F59;
    position:relative;

    &:hover{
        opacity:0.9;
    }
`;

export const Container = styled.div`
    max-width:1100px;
    width:100%;
    margin:auto;
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
    width:160px;
    height:160px;
    border-radius:80px;
    height:auto;
`;

export const Icon = styled.img`
    width:24px;
    height:auto;
    position:absolute;
    top:50%;
    margin-top:-12px;
    margin-left:20px;
    left:0;
`;

export const Sub_h2 = styled.h2`
    text-transform:uppercase;
    font-weight:500;
    font-size:15px;
    letter-spacing:0.1em;
    color:#555;
    max-width:400px;
    text-align:center;
`;

export const PageContainer = styled.div`
    width:100%;
    display:flex;
    height:400px;
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
    background-color:#333;
`;

export const Titulo = styled.h3`
    font-weight:600;
    line-height:1.5em;
    text-transform:uppercase;
    color:#333;
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
    padding:20px;
    display:flex;
    flex-direction:column;
    border-radius:5px;
    border:1px solid rgba(5,5,5,0.2);
    align-items:center;
    padding:10px;
    margin:10px;
    background-color:#E1E1E1;
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