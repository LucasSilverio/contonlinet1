import styled, { css } from 'styled-components';

export const BannerPrincipal = styled.div`
    height:250px;
    width:100%;
    background-color:#5C6BF2;
    margin-top:10px;
    position:absolute;
`;

export const Categories = styled.div`
    display:flex;
    flex:1;
    background-color:#ddd;
    height:100%;
    max-width:300px;
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    max-width:1000px;
    height:100%;
    margin:auto;
    position:relative;
    flex-direction:row;

    

    @media (max-width:1199px){
        
    }

    @media (max-width:1050px){
        height:auto;
        flex-direction:column;
    }
`;

export const Infos = styled.div`
    display:flex;
    flex:1;
    background-color:#FFF;
    flex-direction:column;
    color:#333;
`;

export const Label = styled.label`
    font-weight:bold;
    font-size:18px;
    margin:10px;
`;

export const Materia = styled.div`
    display:flex;
    flex:2;
    background-color:#FFF;
    top:-120px;
    position:inherit;
    flex-direction:column;
    height:100%;
    border-radius:5px;
    padding:20px;
`;

export const MateriaConteudo = styled.div`
    margin-top:20px;
    color:#333;
    font-size:18px;
    line-height:28px;
    font-weight:400;
    color:#30455c;
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
`;

export const Post = styled.div`
    width:300px;
    height:400px;
    margin:10px;
    background-color:#FFF;
    -webkit-box-shadow: 0px 0px 3px 0px #000000; 
    box-shadow: 0px 0px 3px 0px #000000;
`;

export const PostPic = styled.img`
    width:300px;
    height:170px;
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

export const RecentImg = styled.img`
    width:250px;
    border-radius:5px;

    &:hover{
        opacity:0.8;
    }
`;

export const RecentPicArea = styled.div`
    width:80px;
    height:80px;
    display:flex;
    align-items:center;
`;

export const MateriaTitle = styled.h1`
    color:#30455c;
    margin:10px;
    font-size:48px;
    text-transform:uppercase;

`;

export const MateriaSubTitle = styled.h2`
    font-size:20px;
    line-height:24px;
    font-weight:400;
    margin-top:40px;
    color:#30455c;
`;

export const MateriaData = styled.p`
    font-size:14px;
    line-height:24px;
    font-weight:400;
    margin-top:15px;
    color:#30455c;
`;

export const PostContent = styled.p`
    font-size:18px;
    line-height:24px;
    font-weight:400;
    color:#30455c;
    margin:10px;
`;

export const SubContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:300px;
`;

export const Sm = styled.small`
    margin-left:10px;
    color:#30455c;
    font-weight:700;

    &:hover{
        opacity:0.8;
    }
`;

export const TopBg = styled.div`
    width:100%;
    height:240px;
    background-color:${(props) => props.bgColor};
`;