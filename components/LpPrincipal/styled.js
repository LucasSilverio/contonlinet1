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

    &:hover {
        opacity:0.8;
        cursor:pointer;
    }
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    flex-direction:column;
    max-width:1200px;
    margin:auto;
    align-items:center;
    justify-content:center;
    position:relative;

    @media(max-width:499px){
        padding:10px;
    }
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction:column;
    max-width:800px;
    margin-top:60px;
    margin-bottom:100px;
    width:100%;

    form {
        width:100%;
    }

    @media (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const PageContainer = styled.div`
    width:100%;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-top:150px;

    @media(max-width:499px){
        margin-top:100px;
    }
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

export const SubTitleSm = styled.p`
    text-align:center;
    color:${(props) => props.dark ? '#555' : '#FFF'};
    font-size:18px;
    font-weight:500;
    margin:0;
    padding:0;

    a {
        color:#716FF2;
        font-weight:600;
    }
`;