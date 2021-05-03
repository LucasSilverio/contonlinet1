import styled, { css } from 'styled-components';

export const BtnAction = styled.button`
    height:40px;
    width:150px;
    color:#FFF;
    background-color:#5C6BF2;
    border-radius:5px;
`;

export const Container = styled.div`
    padding:20px;
    margin:0;
    display:flex;
    flex-direction:column;
    max-width:1200px;
    min-height:400px;
    width:100%;
    justify-content:center;

    .demo-wrapper {
        color:#000;
    }

    form{
        display:flex;
        flex-direction:column;
    }

    @media (max-width:600px){
        padding:20px;
    }
`;

export const Conteudo = styled.textarea`
    display:none;
`;

export const ConteudoAntigo = styled.div`
    width:100%;
    height:auto;
    color:#333;
    margin-top:40px;
    background-color:#CCC;
    padding:20px;

`;

export const Ipt = styled.input`
    border:1px solid rgba(5,5,5,0.3);
    height:30px;
    border-radius:5px;
    padding-left:10px;
    margin-bottom:10px;
`;

export const Label = styled.label`
    font-size:20px;
    color:#333;
    font-weight:bold;
`;

export const LoaderArea = styled.div`
    width:100%;
    height:40px;
    margin-top:20px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

export const Selector = styled.select`
    border:1px solid rgba(5,5,5,0.3);
    height:30px;
    border-radius:5px;
    padding-left:10px;
    margin-bottom:10px;
`;

export const PageContainer = styled.div`
    width:100%;
    min-height:400px;
    margin-top:80px;
    display:flex;
    flex-direction:column;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-bottom:-100px;
`;


