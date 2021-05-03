import qs from 'qs';

const BASEAPI = 'https://ellesolutions.com.br/apis/contonline/api/';
const company = 1;
 
const osAPI = {

    checkPanelLogged:(jwt)=>{
      let endpoint = 'users/checkPanelLogged';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    check:(jwt)=>{
      let endpoint = 'users/checkpanel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    checkNome:(nome)=>{
      let endpoint = 'company/checkNomes';
      let body = {
        nome
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    checkEmail:(email)=>{
      let endpoint = 'company/checkEmail';
      let body = {
        email
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    checkAdmin:(jwt)=>{
      let endpoint = 'users/checkAdmin';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    checkAdminLogged:(tk)=>{
      let endpoint = 'users/checkAdminLogged';
      let body = {
        tk
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    checkIdentified:(jwt)=>{
      let endpoint = 'users/checkLogged';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getCompanyInfos:()=>{
      let endpoint = 'company/getinfos';
      let body = {
                   idcompany:company
                }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getBanners:(slug)=>{
      let endpoint = 'banners/getBanners';
      let body = {
                slug
                }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getMaterias:(slug)=>{
      let endpoint = 'blog/getMaterias';
      let body = {
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getMateria:(slug, materia)=>{
      let endpoint = 'blog/getMateria';
      let body = {
        slug,
        materia
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getMateriaById:(jwt, materia)=>{
      let endpoint = 'blog/getMateriaById';
      let body = {
        jwt,
        materia
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getMateriasPainel:(jwt)=>{
      let endpoint = 'blog/getMateriasPainel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getMobBanners:(jwt)=>{
      let endpoint = 'banners/getMobBanners';
      let body = {
        idcompany:company
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getPanelInfos:(jwt)=>{
      let endpoint = 'register/getInfos';
      let body = {
                    jwt
                }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getRecentes:()=>{
      let endpoint = 'blog/getRecentes';
      let body = {}
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getServicos:(slug)=>{
      let endpoint = 'company/getServicos';
      let body = {
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getServicosPainel:(jwt)=>{
      let endpoint = 'company/getServicosPainel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getDepoimentos:(slug)=>{
      let endpoint = 'company/getDepoimentos';
      let body = {
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getDepoimentosPainel:(jwt)=>{
      let endpoint = 'company/getDepoimentosPainel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getFaq:(slug)=>{
      let endpoint = 'company/getFaq';
      let body = {
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getFaqPainel:(jwt)=>{
      let endpoint = 'company/getFaqPainel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getValores:(slug)=>{
      let endpoint = 'company/getValores';
      let body = {
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getValoresPainel:(jwt)=>{
      let endpoint = 'company/getValoresPainel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getSessionCode:()=>{
      let endpoint = 'checkout';
      let body = {}
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getInfos:(slug)=>{
      let endpoint = 'company/getInfos';
      let body = {
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },   
    
    getInfosSite:(slug)=>{
      let endpoint = 'company/getInfosSite';
      let body = {
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    }, 

    getInfosPanel:(jwt)=>{
      let endpoint = 'company/getInfosPanel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    }, 

    getPlanos:()=>{
      let endpoint = 'planos/getPlanos';
      let body = {}
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    panelGetBanners:(jwt)=>{
      let endpoint = 'company/getBannersPanel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    passManager:(token)=>{
      let endpoint = 'users/checkTokenPanel';
      let body = {
        token
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    pcitInfo:(item)=>{
      let endpoint = 'planos/pcitInfos';
      let body = {
        item
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

};

export default osAPI;