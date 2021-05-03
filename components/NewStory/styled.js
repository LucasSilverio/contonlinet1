import styled, { css } from 'styled-components';

export const BtnAction = styled.button`
    height:40px;
    width:150px;
    color:#FFF;
    background-color:#1976D2;
    border-radius:5px;
    border:none;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }
`;

export const Btn = styled.a`
    height:44px;
    font-size:12px;
    width:80px;
    color:#FFF;
    background-color:#1976D2;
    border-radius:5px;
    border:none;
    cursor:pointer;
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:10px;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }
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
        background-color:#FFF;
        padding:20px;
    }

    @media (max-width:600px){
        padding:20px;
    }
`;

export const Conteudo = styled.textarea`
    display:none;
`;

export const Ipt = styled.input`
    height:30px;
    border:1px solid rgba(5,5,5,0.2);
    border-radius:5px;
    padding-left:10px;
    margin-bottom:10px;
    color:#333;
`;

export const ImagensArea = styled.div`
    height:auto;
    width:100%;
    display:flex;
    flex-direction:column;
    border:1px solid rgba(10,10,10,0.1);
    padding:20px;
    border-radius:5px;
    background-color:#FFF;
`;

export const Label = styled.label`
    font-size:20px;
    color:#333;
    font-weight:bold;
    margin-bottom:5px;
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
    color:#333;
    margin-bottom:-100px;
`;

export const UploadedImage = styled.div`
    display:flex;
    font-size:12px;
    color:#555;
`;


