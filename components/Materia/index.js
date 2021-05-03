import React, { Component } from 'react';
import moment from 'moment';
import { 
   Container, 
   Infos,
   Label,
   Materia,
   MateriaTitle,
   MateriaSubTitle,
   MateriaData,
   MateriaConteudo,
   PageContainer,
   Recent,
   RecentImg,
   RecentPicArea,
   RecentTitle, 
   Sm,
   TopBg
} from './styled';
import { FirstColor, SecondColor, ThirdColor } from '../MainStyled';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class BlogInfos extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }  

  render(){
    return(
    <PageContainer bgColor={ThirdColor}>
        <TopBg bgColor={this.props.infos.cor} /> 
        <Container> 
          <Materia>
            <MateriaTitle>
              {this.props.info.titulo}
            </MateriaTitle>
            <MateriaSubTitle>
              {this.props.info.previa}
            </MateriaSubTitle>
            <MateriaData>
              {moment(this.props.info.dataenvio).format('DD/MM/YY')}
            </MateriaData>
            <MateriaConteudo dangerouslySetInnerHTML={{ __html: this.props.info.conteudo }}>
              {/* {this.props.info.conteudo} */}
            </MateriaConteudo>
          </Materia>
          <Infos>
            <Label>Posts Recentes</Label>
            {this.props.recents.map((i,index) => (
              <Link href={i.slug} key={index}>
                <Recent>
                  <RecentImg src={i.img} />
                  <RecentTitle>{i.titulo}</RecentTitle>
                  <Sm>Leia mais {'>>'}</Sm>
                </Recent>
              </Link>
            ))}
          </Infos>
        </Container>
    </PageContainer>
    )
  }
}

export default BlogInfos;