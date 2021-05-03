import React, { Component } from 'react';
import Link from 'next/link';
import { Icone } from './styled';
import { FirstColor } from '../MainStyled'; 
import osAPI from '../../services/osAPI';

class Page extends Component {

  constructor(props){
    super(props);
    this.state={
      phone:''
    }
    this.getPhone = this.getPhone.bind(this);
  }

  componentDidMount(){
    // this.getPhone();
  }

  getPhone(){
    osAPI.getPhone()
    .then(r=>r.json())
    .then(json=>{
      this.setState({phone:json.data.whatsapp.replace(/[^0-9]/g, '')})
    })
  }

  render(){
    return(
        <Link href={'//wa.me/55'+this.state.phone} >
            <a target={"_blank"}>
                <Icone src='/whatsapp.png' />
            </a>
        </Link>
      
    )
  }
}

export default Page;