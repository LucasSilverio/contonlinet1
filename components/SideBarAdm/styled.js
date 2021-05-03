import { fadeIn } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
    padding:20px;
    margin:0;
    display:flex;
    flex-direction:row;
    max-width:1200px;
    margin:auto;
    min-height:400px;
    width:100%;

    @media (max-width:600px){
        padding:20px;
    }
`;

export const DrawerButton = styled.button`
    width:70px;
    height:30px;
    background-color:#FE84B0;
    z-index:30;
    position:absolute;
    margin-top:60px;
    left:-10px;
    border-radius:15px;
    border:none;
    display:none;
    align-items:center;
    justify-content:center;
    color:#FFF;

    @media (max-width:900px){
        display:flex;
    }

`;

export const Opcao = styled.div`
    width:200px;
    height:140px;
    background-color:#5C6BF2;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    cursor:pointer;

    &:hover {
        opacity:0.9;
    }
`;

export const OpcaoIcon = styled.img`
    
    width:60px;
    height:60px;
`;

export const OpcaoLabel = styled.div``;

export const PageContainer = styled.div`
    animation: 0.5s ${fadeInAnimation}; 
    width:100%;
    min-height:400px;
    margin-top:80px;
    display:flex;
    flex-direction:row;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-bottom:-100px;
    max-width:320px;

    @media (max-width:900px){
        display:${(props) => props.menuVisible ? 'flex' : 'none'};
    }
`;

export const SideBar = styled.div`
    width:400px;
    min-height:400px;
    display:flex;
    flex-direction:column;
    background-color:#FFF;
    padding:20px;
`;

export const SideBarLogo = styled.img`
    width:80px;
    height:80px;
    border-radius:40px;
    background-color:#DDD;
    margin-bottom:20px;
`;

export const SideBarTitle = styled.label`
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #5C6BF2;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    margin-bottom:20px;

`;

export const SideBarLabel = styled.label`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #999696;
    margin-bottom:20px;

`;

export const SideBarRow = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

