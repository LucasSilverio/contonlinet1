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

    @media (max-width:690px){
        width:100%;
    }

    &:hover{
        opacity:0.9;
    }
`;

export const BoxIpt = styled.div`
    display:flex;
    flex-direction:column;
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
`;

export const Descricao = styled.p`
    font-size:17px;
    color:#888;
    text-align:center;
`;

export const Label = styled.label``;

export const LoadArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Ipt = styled.input`
    width:300px;
    margin:5px;
    border:1px solid rgba(5,5,5,0.2);
    border-radius:5px;
    height:40px;
    padding-left:5px;

    @media (max-width:690px){
        width:100%;
        margin-bottom:10px;
    }
    
`;

export const Row = styled.div`
    display:flex;
    flex-direction:row;    

    @media (max-width:690px){
        flex-direction:column;
    }
`;

export const Sub_h2 = styled.h2`
    text-transform:uppercase;
    font-weight:500;
    letter-spacing:0.1em;
    color:#333;

    @media (max-width:690px){
        text-align:center;
    }
`;

export const TextArea = styled.textarea`
    width:600px;
    margin:5px;
    border:1px solid rgba(5,5,5,0.2);
    border-radius:5px;
    height:120px;
    padding-left:5px;

    @media (max-width:690px){
        width:100%;
    }
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

    @media (max-width:690px){
        text-align:center;
    }
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

export const ServicosArea = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    @media (max-width:690px){
        padding:20px;

        form{
            width:100%;
        }
    }

    form{
        flex-direction:column;
    }
`;

export const Servico = styled.div`
    width:250px;
    height:260px;
    border:1px solid rgba(5,5,5,0.2);
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    margin:10px;
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