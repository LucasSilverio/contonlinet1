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

    @media (max-width:500px){
        max-width:100%!important;
    }
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction:row;
    max-width:1000px;
    margin-top:60px;
    margin-bottom:60px;

    @media (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-bottom:0;
    }

    @media (max-width:500px){
        max-width:100%!important;
    }
`;

export const Content = styled.div`
    flex:1;
    padding-left:20px;

    @media (max-width:800px){
        padding-left:20px;
        padding-right:20px;
    }

    @media (max-width:550px){
        max-width:100%!important;
        padding-left:40px;
        padding-right:40px;
    }
`;

export const ContentFlex = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (max-width:800px){
        display:none;
        text-align:center;
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
        display:flex;
        text-align:center;
        padding:10px;
    }
`;

export const Line = styled.div`
    width:80%;
    height:1px;
    background-color:rgba(10,10,10,0.1);
    margin:auto;
    margin-top:20px;
    margin-bottom:20px;
`;

export const Img = styled.img`
    width:500px;
    height:auto;
    margin-left:10px;

    @media (max-width:550px){
        width:350px;
    }

    @media (max-width:400px){
        width:300px;
    }

    @media (max-width:350px){
        width:270px;
    }
`;

export const Paragrafo = styled.p`
    font-size:18px;
    line-height:24px;
    font-weight:400;
    color:${(props) => props.dark ? '#30455c' : '#FFF'};
    
`;

export const ParagrafoTick = styled.p`
    font-size:18px;
    line-height:24px;
    font-weight:400;
    color:${(props) => props.dark ? '#30455c' : '#FFF'};
    &::before {
        content:url(/tick.png)' ';
    }
`;

export const PageContainer = styled.div`
    width:100%;
    background-color:${(props) => props.bgColor};
    color:#fff;
`;

export const SubTitle = styled.h2`
    text-align:center;
    color:${(props) => props.dark ? '#1976D2' : '#FFF'};
    margin-bottom:-30px;
    font-size:28px;

    @media (max-width:800px){
        margin-bottom:-60px;
        text-align:initial;
        padding:20px;
    }
`;

export const SubTitulo = styled.h2`
    color:#30455c;
    font-size:20px;
    line-height:25px;
    font-weight:700;
`;

export const Tick = styled.img`
    width:16px;
    height:16px;
`;