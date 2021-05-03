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
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    max-width:1200px;
    height:60px;
    margin:auto;
    align-items:center;
    position:relative;
`;

export const Logo = styled.img`
    width:100px;
    height:auto;
    position:absolute;
    cursor:pointer;
`;

export const PageContainer = styled.div`
    width:100%;
    height:60px;
    background-color:${(props) => props.bgColor};
    color:#fff;
    position:fixed;
    z-index:20;
    border-bottom:1px solid rgba(3, 3, 3, 0.1);
`;