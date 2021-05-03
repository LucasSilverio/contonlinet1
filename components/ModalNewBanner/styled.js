import { fadeIn } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

export const BackArea = styled.div`
    animation: 0.5s ${fadeInAnimation};
    position:fixed;
    display:${(props) => props.visible ? 'flex' : 'none'};
    width:20000px;
    height:100%;
    background-color:rgba(5,5,5,0.5);
    z-index:10;
    top:0;
    left:-300px;
`;

export const Container = styled.div`
    animation: 0.5s ${fadeInAnimation};
    background-color:#F1F1F1;
    width:800px;
    height:450px;
    position:fixed;
    top:50%;
    margin-top:-225px;
    display:${(props) => props.visible ? 'flex' : 'none'};
    left:50%;
    margin-left:-400px;
    z-index:20;
    border-radius:5px;
    color:#555;
    font-size:12px;
    cursor:pointer;
    padding:20px;
    flex-direction:column;

    form{
        display:flex;
        flex-direction:column;
    }

    @media (max-width:550px){
        width:90%;
        margin-left:-45%;
    }


`;

export const HistoricoArea = styled.div`
    display:flex;
    flex-direction:column;
    overflow:auto;

    form{
        width:100%;
    }
`;

export const Item = styled.p`
    margin:0;
    padding:0;
`;

export const Ipt = styled.input`
    border-radius:5px;
    height:40px;
    border:1px solid rgba(5, 5, 5,0.3);
    padding-left:5px;
    width:100%;
`;

export const Row = styled.div`
    display:flex;
    flex-direction:row;
    color:#000;
    align-items:center;
    font-size:12px;
`;

export const Selector = styled.select`
    border-radius:5px;
    height:30px;
    border:1px solid rgba(5, 5, 5,0.3);
    padding-left:5px;
`;

export const Label = styled.label`
    color:#555!important;
    margin-top:15px;
    font-size:14px;
    font-weight:600;
    margin-bottom:5px;
    text-transform:uppercase;
    letter-spacing:0.05rem;
`;

export const LoaderArea = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const Salvar = styled.button`
    width:100%;
    height:40px;
    border:none;
    border-radius:5px;
    color:#FFF;
    background-color:#2C4C76;
    margin-top:10px;
    cursor:pointer;
    text-transform:uppercase;

    &:hover{
        opacity:0.9;
    }

    @media (max-width:550px){
        width:100%;
    }
`;

export const TituloModal = styled.p`
    color:#555!important;
    margin-top:10px;
    font-size:20px;
    font-weight:600;
    margin-bottom:10px;
    text-transform:uppercase;
    letter-spacing:0.2rem;
`;

export const TextArea = styled.textarea`
    border-radius:5px;
    height:80px;
    border:1px solid rgba(5, 5, 5,0.3);
    padding-left:5px;
`;

export const Opcao = styled.div`
    width:250px;
    height:40px;
    background-color:#777;
    color:#FFF;
    border-radius:5px;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-top:5px;
    margin-bottom:20px;

    &:hover{
        opacity:0.8;
    }
`;