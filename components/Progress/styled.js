import styled, { css } from 'styled-components';

export const Container = styled.div`
    padding:20px;
    margin:0;
    display:flex;
    flex-direction:row;
    max-width:1200px;
    width:100%;
    align-items:center;

    @media (max-width:600px){
        padding:20px;
    }
`;

export const Item = styled.div`
    display:flex;
    align-items:center;
`;

export const Icon = styled.img`
    width:30px;
    height:30px;
`;

export const IconNext = styled.img`
    width:16px;
    height:16px;
    margin-left:10px;
    margin-right:10px;
`;

export const Label = styled.p`
    font-size:14px;
    color:#555;
    margin:0;
    padding:0;
    margin-left:10px;
    font-weight:600;
`;

export const PageContainer = styled.div`
    width:100%;
    height:100px;
    display:flex;
    flex-direction:row;
    background-color:${(props) => props.bgColor};
    color:#fff;
`;

