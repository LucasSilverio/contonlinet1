import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
    width:100%;
    height:600px;
    background-color:#eee;    
    overflow:hidden;
    position:relative;
    margin-top:100px;
    background-image:url('/backquemsomos.jpg');

    @media (max-width:860px){
        display:flex;
        justify-content:center;
    }

`;

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

export const Content = styled.p`
    line-height:1.5em;
    letter-spacing:0.15em;
    color:#888;
    text-indent:2em;

    @media (max-width:860px){
        position:relative;
    }
`;

export const Sub_h2 = styled.h2`
    text-transform:uppercase;
    font-weight:500;
    font-size:15px;
    letter-spacing:0.1em;
    color:#555;
    max-width:400px;
    text-align:center;
`;

export const SocialArea = styled.div`
    width:100%;
    height:80px;
    position:absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

export const Icon = styled.img`
    width:60px;
    height:auto;
    margin:10px;
    cursor:pointer;
    &:hover{
        transform:scale(1.08);
    }
`;

export const ImgTeam = styled.img`
    width:400px;
    position:absolute;
    left:40px;
    top:90px;
    border-radius:100px;
    x-shadow: 2px 0px 20px 0px rgba(0,0,0,0.2);
    -webkit-box-shadow: 2px 0px 20px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 2px 0px 20px 0px rgba(0,0,0,0.2);

    &:hover{
        x-shadow: 2px 0px 30px 0px rgba(0,0,0,0.2);
        -webkit-box-shadow: 2px 0px 30px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 2px 0px 30px 0px rgba(0,0,0,0.2);
    }

    @media (max-width:1290px){
        display:none;
    }
`;

export const TracoSm = styled.div`
    width:50px;
    height:2px;
    background-color:#333;
`;

export const Principal = styled.div`
    width:800px;
    height:500px;
    background-color:#FFF;
    position:absolute;
    top:50px;
    right:50px;
    border-radius:10px;
    padding:40px;

    @media (max-width:860px){
        width:90%;
        margin:auto;
        max-height:600px;
        overflow-y:auto;
        right:auto;
    }
`;

export const BannerArea = styled.div`
    height:auto;
    max-width:100%;
    width:auto;
    overflow:hidden;
    cursor:pointer;
    

    img {
        width:100%;
        height:auto;
    }
`;