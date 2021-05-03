import { fadeIn } from 'react-animations';
import { fadeOut } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`; 

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

export const BoxContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-width:50%;
    max-height:280px;

    @media (max-width:700px){
        width:100%;
        max-height:unset;
        height:auto;
    }
`;

export const BtnAction = styled.button`
    padding:10px 20px 10px 20px;
    border-radius:5px;
    border:none;
    color:#FFF;
    font-weight:600;
    margin-top:30px;
    letter-spacing:1px;
    font-size:13px;
    cursor:pointer;
    background-color:#005a48;

    &:hover{
        opacity:0.9;
    }
`;

export const Container = styled.div`
    max-width:1100px;
    width:100%;
    margin:auto;
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:center;

    @media (max-width:990px){
        flex-direction:column;
    }
`;

export const ContainerSlider = styled.div`
    position: relative;
    max-width:1200px;
    margin: auto;

    .buttonBack {
        position: absolute;
        border:none;
        top: 100px;
        left: 50%;
        height:20px;
        width:20px;
        border-radius:10px;
        background-color:#FFF;
        transform: translateY(-50%);

        img {
            width:6px;
        }
    }
    
    .buttonNext {
        position: absolute;
        border:none;
        top: 100px;
        right: 40%;
        transform: translateY(-50%);
        height:20px;
        width:20px;
        border-radius:10px;
        background-color:#FFF;
        img {
            width:6px;
        }
    }

    .slider-area{
        max-height:300px;

        .slide-item{
            color:#FFF;
            height:520px;
            width:250px;
            display:flex;
            margin:10px;
            flex-direction:column;

            .image-area {
                height:360px;
                overflow:hidden;
                position:relative;

                img {
                    width:300px;
                    height:auto;
                    position: absolute;
                    top: -9999px;
                    bottom: -9999px;
                    left: -9999px;
                    right: -9999px;
                    margin: auto;
                    border:5px solid #FFF;
                }

                
            }

            .infos-area {
                height:140px;
                display:flex;
                flex-direction:column;
                align-items:center;
            }
        }

        @media (max-width:580px){
            height:380px;

            .slide-item{
                height:320px;
                width:140px;
    
                .image-area {
                    height:240px;

                    img {
                        width:200px;
                        height:auto;
                    }
                }
    
                .infos-area {
                    height:auto;
                }
            }

            

        }
        
    }    

    @media (max-width:990px){
        .buttonBack{
            top:160px;
            margin-right:18px;
        }

        .buttonNext{
            top:160px;
            margin-left:18px;
        }
    }
`;

export const Descricao = styled.p`
    animation: 0.7s ${fadeInAnimation};
    font-size:17px;
    color:#C1C1C1;
    text-align:center;
    display:block;
`;

export const Img = styled.img`
    width:50px!important;
    margin-left:15px;
    border-radius:25px;
    height:auto;
`;

export const Sub_h2 = styled.h2`
    text-transform:uppercase;
    font-weight:500;
    letter-spacing:0.1em;
    color:#fff;
`;

export const PageContainer = styled.div`
    width:100%;
    display:flex;
    background-color:#3B4F59;
    padding-top:40px;
    padding-bottom:40px;

`;

export const Paragrafo = styled.p`
    font-weight:600;
    color:#666666;
    font-size:16px;
`;

export const TracoSm = styled.div`
    width:50px;
    height:2px;
    background-color:#fff;
`;

export const Titulo = styled.h3`
    font-weight:600;
    line-height:1.5em;
    text-transform:uppercase;
    color:#FFF;
    font-weight:700;
    font-size:60px;
    letter-spacing:1px;
    margin:0;
`;

export const ItensArea = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    flex-direction:column;
    flex-wrap:wrap;
`;

export const ElementoArea = styled.div`,
    height:200px;
    width:400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#FFF;
    padding:10px;
    padding-left:60px;

    @media (max-width:990px){
        justify-content:flex-start;
        align-items:flex-start;
        
    }
`;

export const MensagemArea = styled.div`
    height:auto;
    width:400px;
    display:flex;
    align-items:center;
    color:#FFF;
    font-size:14px;
    font-style:italic;

    strong {
        font-size:22px;
    }

    @media (max-width:990px){
        max-width:100%;
    }
`;

export const Autor = styled.div`
    height:auto;
    width:400px;
    display:flex;
    align-items:center;
    color:#FFF;
    font-size:14px;
    font-style:italic;
`;

export const Item = styled.div`
    flex:1;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    margin:10px;
    cursor:pointer;
`;

export const Row = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    flex-wrap:wrap;
`;

export const Desk = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    flex-wrap:wrap;

    @media (max-width:700px){
        display:none;
    }
`;

export const Mob = styled.div`
    display:none;
    flex-direction:row;
    width:100%;
    flex-wrap:wrap;
    @media (max-width:700px){
        display:flex;
    }
`;

export const Slider = styled.div`
    height:250px;
    widht:320px;
    background-color:#FFF;
`;

export const BannerArea = styled.div`
    height:460px;
    max-width:100%;
    width:auto;
    overflow:hidden;
    cursor:pointer;
    

    img {
        width:100%;
        height:auto;
    }
`;