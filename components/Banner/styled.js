import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
    width:100%;
    max-height:460px;
    background-color:#eee;    
    overflow:hidden;
    position:relative;
    margin-top:100px;

`;

export const BannerArea = styled.div`
    height:auto;
    max-width:100%;
    width:auto;
    overflow:hidden;
    cursor:pointer;   
    display:block;

    @media (max-width:690px){
        display:none;
    }
    
    img {
        width:100%;
        height:auto;
    }
`;

export const BannerAreaMob = styled.div`
    height:auto;
    max-width:100%;
    width:auto;
    overflow:hidden;
    cursor:pointer;
    display:none;
    
    @media (max-width:690px){
        display:block;
    }

    img {
        width:100%;
        height:auto;
    }
`;

export const Desk = styled.div`
    display:block;
    height:auto;
    max-width:100%;
    width:auto;
    overflow:hidden;
    cursor:pointer;   
    display:block;

    @media (max-width:690px){
        display:none;
    }
`;

export const Mob = styled.div`
    display:none;

    @media (max-width:690px){
        display:block;
    }
`;