import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Vaccine from './components/Vaccine';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      item:[
        { 
        nameCompony:"Astrazeneca",
        nameInter:"AZD1222",
        produce:"England",
        technology:"ไวรัส Adonovirus พาหะ",
        },
        // { 
        //   nameCompony:"Phizer",
        //   nameInter:"BNT162",
        //   produce:"USA",
        //   technology:"mRNA",
        // },
        { 
        nameCompony:"moderna",
        nameInter:"mRNA-1273",
        produce:"USA",
        technology:"mRNA"
        },
      //   {        
      //   nameCompony:"sinovac",
      //   nameInter:"Coronavac",
      //   produce:"China",
      //   technology:"วัคซันเชื้อตาย",
      // },
      ],
    };
  }


render(){

  //ใช้ loop map
const itemRender = this.state.item.map((iTuu)=>{
  return (
    <Vaccine 
    nameCompony = {iTuu.nameCompony}
    nameInter = {iTuu.nameInter}
    produce = {iTuu.produce}
    techonology = {iTuu.techonology}
    />
        );

}
);



return <div className='vaccine'>
          {itemRender}
      </div>
;

}
}


ReactDOM.render(<App />, document.querySelector('#root'));
