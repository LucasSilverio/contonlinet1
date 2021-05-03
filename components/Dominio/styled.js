import styled, { css } from 'styled-components';

export const Analise = styled.p`
    color:#1976D2;
    font-size:18px;
`;

export const BtnAction = styled.button`
    height:40px;
    border-radius:5px;
    width:100%;
    background-color:#5C6BF2;
    color:#FFF;
    margin-top:20px;
    font-weight:bold;
    text-transform:uppercase;
    cursor:pointer;
    border:none;

    &:hover{
        opacity:0.9;
    }
`;

export const Container = styled.div`
    padding:20px;
`;

export const LoaderArea = styled.div`
    width:100%;
    height:40px;
    margin-top:20px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

export const PageContainer = styled.div`
    width:100%;
    margin-top:80px;
    display:flex;
    flex-direction:column;
    background-color:${(props) => props.bgColor};
    color:#fff;
`;

export const FormLabel = styled.label`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #999696;
    margin-bottom:20px;

`;

export const Ipt = styled.input`
    width:100%;
    height:40px;
    border-radius:5px;
    border:none;
    padding-left:10px;
    color:#333;
    margin-top:10px;
    margin-bottom:20px;
    border:1px solid rgba(5,5,5,0.2)
`;

export const Info = styled.p`
    margin:0;
    padding:0;
    color:#555;
`;

export const SideBarRow = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

export const StatusArea = styled.div`
    display:flex;
    flex-direction:column;
    color:#555;
    margin-bottom:20px;

`;

