import styled, { css } from 'styled-components';

export const BtnAction = styled.button`
    width:110px;
    height:40px;
    position:absolute;
    right:0;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;

    &:hover{
        opacity:0.9;
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

    @media (max-width:800px){
        padding:20px;
    }
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction:row;
    max-width:800px;

    @media (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const Content = styled.div`
    margin-left:10px;
    @media (max-width:800px){
        text-align:center;
        padding:10px;
    }
`;

export const ContentStars = styled.div`
    display:flex;
    justify-content:${(props) => props.left ? 'start' : 'end'};
    flex-direction:${(props) => props.column ? 'column' : 'row'};
    margin-top:-10px;
    margin-bottom:5px;
    margin-left:10px;
`;

export const ContentFlex = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (max-width:800px){
        text-align:center;
        display:none;
        padding:10px;
    }
`;

export const ContentFlexMob = styled.div`
    flex:1;
    display:none;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (max-width:800px){
        text-align:center;
        display:flex;
        padding:10px;
        margin-bottom:-30px;
    }
`;

export const ContentBox = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Img = styled.img`
    width:80px;
    height:auto;
    margin-left:10px;
`;

export const Star = styled.img`
    width:12px;
    height:auto;
    margin:5px;
`;

export const AvaliacaoImg = styled.img`
    margin-top:60px;
    width:200px;
    @media (max-width:800px){
        margin-bottom:50px;
    }
`;

export const Paragrafo = styled.p` 
    font-size:15px;
    line-height:24px;
    font-weight:400;
    color:${(props) => props.dark ? '#30455c' : '#FFF'};
    text-align:${(props) => props.right ? 'right' : 'left'};

    @media (max-width:800px){
        text-align:left;
    }
`;

export const ParagrafoSm = styled.p` 
    font-size:15px;
    line-height:24px;
    font-weight:400;
    margin:0;
    color:${(props) => props.dark ? '#30455c' : '#FFF'};
    text-align:${(props) => props.left ? 'left' : 'right'};

    @media (max-width:800px){
        text-align:left;
    }
`;

export const PageContainer = styled.div`
    width:100%;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-bottom:100px;
    margin-top:100px;
    padding-top:40px;
    padding-bottom:40px;
`;

export const SubTitle = styled.h2`
    text-align:center;
    color:${(props) => props.dark ? '#5C6BF2' : '#FFF'};
    margin-bottom:-30px;
    font-size:28px;
    max-width:800px;
`;