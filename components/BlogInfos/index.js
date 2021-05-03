import React, { Component } from 'react';
import Link from 'next/link';
import { 
   BannerPrincipal,
   BannerPrincipalMob,
   BannerPrincipalTab,
   Categories,
   Container, 
   Column,
   Label,
   PageContainer,
   Posts,
   Post,
   PostPic,
   PostTitle,
   PostContent,
   Recent,
   RecentPic,
   RecentPicArea,
   RecentTitle,
   SubContainer,
   Sm,
   SubTitle,
   Title,
   Top,
   TopBanner,
   TopBannerPic
} from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';

class BlogInfos extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
    <PageContainer bgColor={ThirdColor}>
    {/* <BannerPrincipal src='/bannerBlog.png' />
    <BannerPrincipalTab src='/bannerBlogTab.png' />
    <BannerPrincipalMob src='/bannerBlogMob.png' /> */}
    {/* <Top>Cartb Blog - Informações e tutoriais</Top> */}    
        <Container> 
            {/* <BannerPrincipal src='/bannerBlog.png' /> */}
            <TopBanner>
              <Column>
                <Title>Blog ContOnline</Title>
                <SubTitle>Conteúdo grátis, matérias e novidades sobre contabilidade, marketing e teconlogia</SubTitle>
              </Column>
              <Column>
                <TopBannerPic src='/blog.svg' />
              </Column>
            </TopBanner>
            <SubContainer>
              <Posts>
                {this.props.materias.map((i, index) => (
                  <Link href={'/blog/'+i.slug} key={index}>
                    <Post >
                      <PostPic src={i.img}/>
                      <PostTitle>{i.titulo}</PostTitle>
                      <PostContent>{i.previa}</PostContent>
                    </Post>
                  </Link>
                ))}
              </Posts>
              <Categories>
                <Label>Posts Recentes</Label>
                {this.props.recents.map((i,index) => (
                  <Link href={i.slug} key={index}>
                    <Recent>
                      <RecentTitle>{i.titulo}</RecentTitle>
                      <Sm>Leia mais {'>>'}</Sm>
                    </Recent>
                  </Link>
                ))}
              </Categories>

            </SubContainer>
        </Container>
    </PageContainer>
    )
  } 
}

export default BlogInfos;