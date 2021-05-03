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
    flex-direction:row;
    max-width:800px;
    margin-top:60px;
    margin-bottom:60px;
    width:100%;

    @media (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-bottom:0;
    }
`;

export const Content = styled.div`
    flex:1;

    @media (max-width:800px){
        padding:20px;
    }
`;

export const Img = styled.img`
    width:90%;
    height:auto;

    @media (max-width:350px){
        width:14px;
    }
`;

export const Item = styled.div`
    display:flex;
    flex:1;
    height:100px;
    border:none;
    flex-direction:column;
    position:relative;
`;

export const ItemNumber = styled.div`
    width:34px;
    height:34px;
    border-radius:17px;
    background-color:${(props) => props.end ? '#1976D2' : '#101759'};
    color:#FFF;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:18px;
    font-weight:bold;
    z-index:1;
`;

export const Line = styled.div`
    height:1px;
    background-color:#6A6F9E;
    width:100%;
    position:absolute;
`;

export const LineR = styled.div`
    height:1px;
    background-color:#6A6F9E;
    width:50%;
    right:0;
    position:absolute;
`;

export const LineL = styled.div`
    height:1px;
    background-color:#6A6F9E;
    width:50%;
    left:0;
    position:absolute;
`;

export const Paragrafo = styled.p`
    font-size:16px;
    line-height:24px;
    font-weight:400;
    color:#888;
    
`;

export const PageContainer = styled.div`
    width:100%;
    background-color:${(props) => props.bgColor};
    color:#fff;
`;

export const SubTitle = styled.h2`
    text-align:center;
    color:${(props) => props.dark ? '#716FF2' : '#FFF'};
    margin-bottom:-30px;
    font-size:28px;

    @media (max-width:800px){
        margin-bottom:-60px;
        text-align:initial;
        padding:20px;
    }
`;

export const TopItem = styled.div`
    height:30px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;