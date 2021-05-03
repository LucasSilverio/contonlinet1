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
    font-weight:bold;

    &:hover{
        opacity:0.9;
    }

    @media (max-width:1199px){
        margin-right:20px;
    }

    @media (max-width:1199px){
        display:none;
    }
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    max-width:1200px;
    height:80px;
    margin:auto;
    align-items:center;
    position:relative;

    @media (max-width:1199px){
        padding-left:20px;
        padding-right:20px;
    }

    @media (max-width:1199px){
        justify-content:center;
    }
`;

export const Lk = styled.a`

    @media (max-width:1000px){
      display:none;      
    }
`;

export const Logo = styled.img`
    width:120px;
    height:auto;
    position:absolute;

    
`;

export const MenuArea = styled.div`
    height:80%;
    width:50%;
    position:absolute;
    right:0;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    color:#30455c;
`;

export const OpcaoItem = styled.div`
    cursor:pointer;
`;

export const PageContainer = styled.div`
    width:100%;
    height:80px;
    background-color:${(props) => props.bgColor};
    color:#fff;
    position:fixed;
    z-index:20;
    border-bottom:1px solid rgba(3, 3, 3, 0.1);
`;