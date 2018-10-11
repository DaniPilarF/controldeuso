import React, { Component } from 'react';
import './App.css';
import './index.css';
import Header from './Header';
import Card from './Card';

class App extends Component {
  state = {
    usuario:{nombre:'dfernandez',color:'test'},
    clientsList:[
      {id:1,cliente:'Cliente'  ,categoria:0,score:4,version:'189.2.0',instalado:'on cloud',descripcion:'descripcion 1',foto:'',pais:'AR'},
      {id:2,cliente:'Cliente 2',categoria:0,score:9,version:'189.2.0',instalado:'on cloud',descripcion:'descripcion 1',foto:'',pais:'CL'},
      {id:3,cliente:'Cliente 3',categoria:0,score:6,version:'189.2.0',instalado:'on cloud',descripcion:'descripcion 1',foto:'',pais:'MX'},
      {id:4,cliente:'Cliente 4',categoria:0,score:8,version:'189.2.0',instalado:'on premise',descripcion:'descripcion 1',foto:'',pais:'US'},
      {id:5,cliente:'Cliente 5',categoria:0,score:4,version:'189.2.0',instalado:'on premise',descripcion:'descripcion 1',foto:'',pais:'CA'},
      {id:6,cliente:'Cliente 6',categoria:0,score:5,version:'189.2.0',instalado:'on premise',descripcion:'descripcion 1',foto:'',pais:'AR'},
      {id:7,cliente:'Cliente 7',categoria:0,score:1,version:'189.2.0',instalado:'on cloud',descripcion:'descripcion 1',foto:'',pais:'CL'},
      
    ]
  }

  getCards = () =>{
    return this.state.clientsList.map((client, index) =>{
      return(
          <Card cardInfo={client}/>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <Header userName={this.state.usuario.nombre} clientsList={this.state.clientsList}/>
        <span>contenido</span>
        <div className='cards-container layout-row layout-wrap'>
          {this.getCards()}
        </div>
      </div>
    );
  }
}

export default App;
