import styled, { css } from 'styled-components';

export const BannerPrincipal = styled.img`
    width:100%;
    margin-top:10px;
    @media (max-width:600px){
        display:none;
    }
`;

export const BannerPrincipalMob = styled.img`
    width:100%;
    margin-top:10px;
    display:none;

    @media (max-width:400px){
        display:block;
    }
`;

export const BannerPrincipalTab = styled.img`
    width:100%;
    margin-top:10px;
    display:none;

    @media (max-width:600px){
        display:block;
    }

    @media (max-width:400px){
        display:none;
    }
`;

export const Categories = styled.div`
    display:flex;
    flex:1;
    background-color:#FFF;
    flex-direction:column;
    color:#333;
    max-width:320px;
    padding-left:10px;

    @media (max-width:960px){
        display:none;
    }
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    max-width:1300px;
    height:100%;
    margin:auto;
    position:relative;
    flex-direction:column;

    @media (max-width:1199px){
        
    }

    @media (max-width:1050px){
        height:auto;
        flex-direction:column;
    }
`;

export const Column = styled.div`
    display:flex;
    width:50%;
    color:#555;
    justify-content:center;
    padding:100px;
    flex-direction:column;
`;

export const Label = styled.label`
    font-weight:bold;
    font-size:18px;
    margin:10px;
`;

export const PageContainer = styled.div`
    width:100%;
    height:100%;
    background-color:${(props) => props.bgColor};
    color:#fff;    
    
    @media (max-width:1050px){
        height:auto;
    }
`;

export const Posts = styled.div`
    display:flex;
    flex:2;
    height:100%;
    flex-wrap:wrap;

    @media (max-width:960px){
        justify-content:center;
        align-items:center;
    }
`;

export const Post = styled.div`
    width:300px;
    height:400px;
    margin:10px;
    background-color:#FFF;
    -webkit-box-shadow: 0px 0px 3px 0px #CCC; 
    box-shadow: 0px 0px 3px 0px #ccc;
    cursor:pointer;

    &:hover{
        opacity:0.8;
    }
`;

export const PostPic = styled.img`
    width:300px;
    height:170px;
    border:none;
`;

export const PostTitle = styled.h2`
    color:#30455c;
    margin:10px;
    font-size:18px;
`;

export const PostContent = styled.p`
    font-size:18px;
    line-height:24px;
    font-weight:400;
    color:#30455c;
    margin:10px;
`;

export const Recent = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    cursor:pointer;
`;

export const RecentTitle = styled.div`
    margin-left:10px;
    font-size:12px;
    text-transform:uppercase;
    font-weight:400;
    color:#30455c;

    &:hover{
        opacity:0.8;
    }
`;

export const RecentPic = styled.img`
    width:100%;
`;

export const RecentPicArea = styled.div`
    width:80px;
    height:80px;
    display:flex;
    align-items:center;
`;

export const Sm = styled.small`
    margin-left:10px;
    color:#30455c;
    font-weight:700;

    &:hover{
        opacity:0.8;
    }
`;

export const SubContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:50px;
`;

export const Top = styled.h1`
    color:#30455c;
    margin-left:30px;
    font-size:3.5rem;
    font-size:900;
`;

export const TopBanner = styled.div`
    width:100%;
    height:400px;
    background-color:#FFF;
    display:flex;

`;

export const TopBannerPic = styled.img`
    
`;

export const Title = styled.h1`
    color:#555;
`;

export const SubTitle = styled.p`
    color:#555;
    margin:0;
`;