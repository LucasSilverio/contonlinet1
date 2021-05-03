import { fadeIn } from 'react-animations';
import { fadeOut } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`; 
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

export const BoxInput = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin:5px;
`;

export const BoxInputSm = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin:5px;
    align-items:center;
`;

export const BoxForm = styled.div`
    width:800px;
    height:300px;
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

    @media (max-width:800px){
        width:100%;
        height:600px;
        
        form {
            padding:2px;
        }
    }
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    flex-direction:column;
    max-width:800px;
    margin:auto;
    align-items:center;
    justify-content:center;
    position:relative;
    width:100%;
    min-height:470px;

    form{
        width:100%;
        background-color:#FFF;
        padding:5px;
    }

    @media (max-width:800px){
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

export const ColumnBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const ColumnBoxSm = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
`;

export const Desc = styled.p`
    margin:0;
    padding:0;
    font-size:11px;
    color:#555;
`;

export const FormBox = styled.div`
    display:flex;
    justify-content:center;

    select {
        height:35px;
        width:100%;
        padding-left:10px;
        border:1px solid #999;
        margin:5px;
        color:#999;
        border-radius:5px;
    }

    @media (max-width:620px){
        select {
            width:96%;
        }
        flex-direction:column;
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
    flex:${(props) => props.s};

    @media (max-width:800px){
        flex:auto;
    }
`;

export const IptForm = styled.input`
    height:40px;
    width:96%;
    padding-left:10px;
    border:1px solid #CCC;
    margin:5px;
    text-transform:uppercase;
    border-radius:5px;
    color:#333;

    @media (max-width:620px){
        width:94%;
    }
`;

export const IptFormSm = styled.input`
    height:40px;
    width:300px;
    padding-left:10px;
    border:1px solid #CCC;
    margin:5px;
    text-transform:uppercase;
    border-radius:5px;
    color:#333;

    @media (max-width:620px){
        width:94%;
    }
`;

export const Item = styled.p`
    color:#555;
    padding-left:10px;
    text-align:center;
`;

export const Label = styled.label`
    font-size:13px;
    color:#999;
`;

export const LoadArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const PaymentMethod = styled.div`
    width:100%;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${(props) => props.color};
    border-radius:5px;
`;

export const PaymentItem = styled.div`
    animation: 0.5s ${fadeInAnimation};
    color:#555;
    width:120px;
    height:60px;
    display:flex;
    justify-content:center;    
    margin:5px;
    background-color:#FFF;
    flex-direction:column;
    font-size:10px;
    align-items:center;
    border:${(props) => props.selected ? '2px solid #53D660' : 'none'};
    border-radius:5px;
    cursor:pointer;
    opacity:${(props) => props.selected ? 0.8 : 1};

    &:hover{
        opacity:0.8;
    }
`;

export const PaymentImg = styled.img`
    width:40px;
    height:40px;
`;

export const Paragrafo = styled.p`
    font-size:18px;
    color:${(props) => props.dark ? '#555' : '#FFF'}
`;

export const PageContainer = styled.div`
    width:100%;
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

export const ResumoMob = styled.div`
    display:none;
    width:94%;
    background-color:#F1F1F1;
    height:250px;
    flex-direction:column;
    padding-left:10px;

    @media (max-width:600px){
        display:flex;
    }
`;

export const ResumoTitle = styled.div`
    display:flex;
    font-weight:bold;   
`;

export const ResumoItem = styled.div`
    display:flex;
`;

export const ResumoItems = styled.div`
    max-height:180px;
    overflow:auto;
`;

export const ResumoItemPic = styled.img`
    width:45px;
    height:60px;
`;

export const ResumoItemTitle = styled.div`
    align-items:center;
    margin-left:3px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    max-width:200px; 
    display:block;
    line-height:60px;
    font-size:12px;
    color:#555;
`;

export const Riscado = styled.div`
    color:#5C6BF2;
    text-decoration:line-through;
    top:0;
    position:absolute;
    
`;

export const Row = styled.div`
    display:flex;
    width:100%;

    @media (max-width:800px){
        flex-direction:column;
    }
`;

export const Select = styled.select`
    height:40px;
    width:50%;
    padding:5px;
    border:1px solid rgba(5,5,5,0.4);
    border-radius:5px;
    margin:10px;
    flex:${(props) => props.s};

    @media (max-width:800px){
        flex:auto;
        width:98%;
    }
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

export const Salvar = styled.button`
    height:40px;
    max-width:160px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border:none;
    cursor:pointer;
    margin-top:10px;
    border-radius:5px;
    padding-left:20px;
    padding-right:20px;

    &:hover{
        background-color:#53D660;
        
    }

    @media (max-width:620px){
        width:96%;
        margin-left:5px;
    }
`;

export const SubTitle = styled.h2`
    text-align:center;
    color:${(props) => props.dark ? '#555' : '#FFF'}
`;

export const Sm = styled.small`
    font-size:12px!important;
    color:#FFF;
`;

export const SeloProtegido = styled.img`
    width:110px;
    height:auto;
    position:absolute;
    // top:0;
    right:40px;

    @media (max-width:620px){
        position:relative;
    }

`;

export const Title = styled.h1`
    color:#555;
    font-size:20px;

    @media (max-width:800px){
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