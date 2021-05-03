import styled, { css } from 'styled-components';

export const Alert = styled.p`
    margin:0;
    padding:0;
    font-size:10px;
    color:${(props) => props.correct ? '#00AE9D' : '#800000'};
    margin-left:10px;
`;

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
        opacity:0.8;
    }
`;

export const Bottom = styled.div`
    display:flex;
    justify-content:center;
`;

export const BoxForm = styled.div`
    width:500px;
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

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
`;

export const BoxIpt = styled.div`
    display:flex;
    flex-direction:row;
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

    @media (max-width:600px){
        padding:20px;
    }
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction:row;
    max-width:800px;
    margin-top:60px;
    margin-bottom:60px;

    @media (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const Content = styled.div`
    width:360px;
    height:auto;
    background-color:#FFF;
    margin:4px;
    padding-bottom:20px;

    @media (max-width:800px){
        text-align:center;
        padding:10px;
    }
`;

export const ContentFlex = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (max-width:800px){
        text-align:center;
        padding:10px;
    }
`;

export const Img = styled.img`
    width:350px;
    height:auto;
    margin-left:10px;
`;

export const Items = styled.div``;

export const Ipt = styled.input`
    height:40px;
    padding:5px;
    border:1px solid rgba(5,5,5,0.4);
    border-radius:5px;
    margin:10px;
`;

export const IptDestak = styled.input`
    height:40px;
    padding:5px;
    border:${(props) => props.correct ? '2px solid #00AE9D' : '2px solid #800000'};
    border-radius:5px;
    margin:10px;
`;

export const Item = styled.p`
    color:#555;
    padding-left:10px;
    text-align:center;
`;

export const Label = styled.label`
    color:#777;
    margin-left:10px;
    font-size:13px;
    font-weight:700;
`;

export const LoadArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Lk = styled.a`
    width:100%;
    height:40px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;
    font-weight:bold;
    margin-top:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:13px;

    &:hover{
        opacity:0.8;
        transform:scale(1.01)
    }
`;

export const Paragrafo = styled.p`
    font-size:18px;
    color:${(props) => props.dark ? '#555' : '#FFF'}
`;

export const PageContainer = styled.div`
    width:100%;
    min-height:600px;
    margin-top:100px;
    display:flex;
    background-color:${(props) => props.bgColor};
    color:#fff;
`;

export const PrecoArea = styled.div`
    display:flex;
    align-items:baseline;
    position:relative;
    justify-content:center;
`;

export const Riscado = styled.div`
    color:#5C6BF2;
    text-decoration:line-through;
    top:0;
    position:absolute;
    
`;

export const PrecoLegend = styled.div`
    color:#5C6BF2;
`;

export const PrecoLegendBottom = styled.div`
    color:#5C6BF2;
    position:absolute;
    bottom:0;
`;

export const Preco = styled.div`
    color:#5C6BF2;
    font-size:80px;
    font-weight:bold;
`;

export const SubTitle = styled.h2`
    text-align:center;
    color:${(props) => props.dark ? '#555' : '#FFF'}
`;

export const Sm = styled.small`
    font-size:12px!important;
    color:#FFF;
`;

export const Title = styled.h1`
    color:#555;
    font-size:20px;

    @media (max-width:600px){
        text-align:center;
    }
`;

export const Top = styled.div`
    height:54px;
    display:flex;
    justify-content:center;
    font-weight:bold;
    align-items:center;
    font-size:30px;
    color:#5C6BF2;
    flex-direction:column;
    background-color:${(props) => props.destaque ? '#BEC4FA' : '#FFF'}
`;