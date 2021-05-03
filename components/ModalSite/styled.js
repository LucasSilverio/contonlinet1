import styled, { css } from 'styled-components';

export const Container = styled.div`
    width:800px;
    height:450px;
    background-color:#fff;
    position:fixed;
    z-index:50;
    top:50%;
    left:50%;
    margin-top:-250px;
    margin-left:-400px;
    display:flex;
    flex-direction:row;
    border-radius:5px;

    @media (max-width:800px){
        width:100%;
        margin-left:0;
        left:5px;
    }
`;

export const Destaque = styled.div`
    font-size:28px;
    font-weight:bold;
    color:#101759;
    max-width:150px;
    margin:auto;
    display:flex;
    flex:1;
    border-bottom:3px solid #716FF2;
    justify-content:center;
`;

export const ImagemArea = styled.div`
    flex:1;
    height:100%;
    background-color:#FFF;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    border-top:3px solid #716FF2;
    border-left:3px solid #716FF2;
    border-bottom:3px solid #716FF2;
    padding:10px;

    @media (max-width:800px){
        display:none;
    }
`;

export const ImagemAreaTop = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Imagem = styled.img`
    width:80px;
    height:auto;
`;

export const ImagemLg = styled.img`
    width:160px;
    height:auto;
    margin-bottom:20px;
`;

export const InfoArea = styled.div`
    flex:1;
    height:100%;
    background-color:#FFF;
    color:#777;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    border-top:3px solid #716FF2;
    border-right:3px solid #716FF2;
    border-bottom:3px solid #716FF2;
    padding:10px;
`;

export const InfoAllArea = styled.div`
    flex:1;
    height:100%;
    background-color:#FFF;
    color:#777;
    border-radius:5px;
    border:3px solid #716FF2;
    padding:10px;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction:column;
    padding-top:60px;
    padding-bottom:50px;
`;

export const InfoTituloArea = styled.div`
padding:20px;
`;

export const InfoTitulo = styled.div`
    font-size:40px;
    font-weight:bold;
    line-height:30px;
`;

export const InfoSubTitulo = styled.div`
    font-size:20px;
    font-weight:bold;
    line-height:18px;
    margin-top:10px;
`;

export const InfoInputArea = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
`;

export const Ipt = styled.input`
    height:40px;
    padding:5px;
    border-radius:5px;
    border:1px solid rgba(0, 0, 0, 0.3);
    margin:3px;
    margin-bottom:14px;
`;

export const InfoBotaoArea = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const InfoBotao = styled.button`
    padding:10px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    font-weight:bold;
    font-size:18px;
    border:none;
    border-radius:5px;
    cursor:pointer;
`;

export const Fundo = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.3);
    z-index:45;
`;

export const Label = styled.label`
    font-size:15px;
    font-weight:bold;
    color:#555;
`;

export const LoadArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Salvar = styled.button`
    width:100%;
    height:40px;
    color:#FFF;
    background-color:#F2A57C;
    border-radius:5px;
    cursor:pointer;
    font-weight:bold;
    border:none;
    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }
`;

export const Selector = styled.select`
    height:40px;
    padding:5px;
    border-radius:5px;
    border:1px solid rgba(0, 0, 0, 0.3);
    margin:3px;
    margin-bottom:10px;
`;

export const Texto = styled.p`
    max-width:220px;
    margin:auto;
    margin-top:10px;
    color:#555;
    font-size:18px;
`;

export const TextoL = styled.p`
    max-width:280px;
    margin:auto;
    margin-top:10px;
    margin-bottom:10px;
    color:#555;
    font-size:18px;
`;