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
    margin-top:20px;

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
    margin-top:20px;
    margin-bottom:100px;
    width:100%;

    form {
        width:100%;
        max-width:600px;
        margin:auto;
        text-align:center;
    }

    @media (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const Ipt = styled.input`
    width:100%;
    height:40px;
    padding:5px;
    border-radius:5px;
    border:1px solid rgba(10,10,10, 0.3);
    margin:5px;
`;

export const LoaderArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
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