import React, { Component } from 'react';
import './App.css';
import './index.css';
import Header from './Header';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    usuario:{nombre:'dfernandez',color:'test'},
    clientsList:[
      {id:1,cliente:'Cliente'  ,categoria:0,score:4,version:'189.2.0',instalado:'on cloud'},
      {id:2,cliente:'Cliente 2',categoria:0,score:4,version:'189.2.0',instalado:'on cloud'},
      {id:3,cliente:'Cliente 3',categoria:0,score:4,version:'189.2.0',instalado:'on cloud'},
      {id:4,cliente:'Cliente 4',categoria:0,score:4,version:'189.2.0',instalado:'on cloud'},
      {id:5,cliente:'Cliente 5',categoria:0,score:4,version:'189.2.0',instalado:'on cloud'},
      {id:6,cliente:'Cliente 6',categoria:0,score:4,version:'189.2.0',instalado:'on cloud'},
      {id:7,cliente:'Cliente 7',categoria:0,score:4,version:'189.2.0',instalado:'on cloud'},
    ]
  }

  render() {
    return (
      <div className="App">
        <Header userName={this.state.usuario.nombre} clientsList={this.state.clientsList}/>
       <span>contenido</span>
    
      </div>
    );
  }
}

export default App;
