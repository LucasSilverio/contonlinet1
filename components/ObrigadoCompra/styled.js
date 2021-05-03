import styled, { css } from 'styled-components';


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
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction:column;
    max-width:800px;
    margin-top:60px;
    margin-bottom:100px;
    width:100%;
    background-color:#FFF;
    padding:40px;
    border-radius:5px;
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
`;

export const SubTitle = styled.h2`
    text-align:center;
    color:${(props) => props.dark ? '#716FF2' : '#FFF'};
    font-size:32px;
    font-weight:700;
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