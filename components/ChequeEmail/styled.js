import styled, { css } from 'styled-components';


export const BtnAction = styled.button`
    width:100%;
    height:40px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;
    font-weight:bold;
    margin-top:20px;

    &:hover{
        opacity:0.9;
    }
`;

export const Bottom = styled.div`
    display:flex;
    justify-content:center;
`;

export const BoxForm = styled.div`
    width:420px;
    padding:15px;
    height:auto;
    background-color:#FFF;
    border-radius:5px;
    border:1px solid rgba(5,5,5,0.1);
    display:flex;
    flex-direction:column;

    form{
        display:flex;
        flex-direction:column;
        padding:20px;
    }

    @media (max-width:600px){
        width:100%;
    }
`;

export const Container = styled.div`
    color:#333;
    margin:0;
    display:flex;
    flex-direction:column;
    max-width:1200px;
    margin:auto;
    align-items:center;
    justify-content:center;
    position:relative;

    @media (max-width:600px){
        padding:20px;
    }
`;

export const Paragrafo = styled.p`
    font-size:18px;
    color:${(props) => props.dark ? '#555' : '#FFF'}
`;

export const PageContainer = styled.div`
    width:100%;
    min-height:500px;
    margin-top:100px;
    display:flex;
    background-color:${(props) => props.bgColor};
    color:#fff;
`;

export const Title = styled.h1`
    color:#555;
    font-size:20px;

    @media (max-width:600px){
        text-align:center;
    }
`;
