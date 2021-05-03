import styled, { css } from 'styled-components';

export const Container = styled.div`
    padding:20px;
    margin:0;
    display:flex;
    flex-direction:row;
    max-width:1200px;
    min-height:400px;
    width:100%;

    @media (max-width:600px){
        padding:20px;
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
    margin:10px;

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
    width:100%;
    min-height:400px;
    margin-top:80px;
    display:flex;
    flex-direction:row;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-bottom:-100px;
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

