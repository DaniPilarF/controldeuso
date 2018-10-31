import React, {Component} from 'react';

import Header from './components/Header';
import Card from './components/Card';
import HomeSearchBar from './components/HomeSearchBar';

import {Route, Switch} from 'react-router-dom';
import {getScoreColor, getStarsCategory} from "./utils/Category";

import './App.scss';
import './index.css';

import './colorThemes';

import * as Category from "./constants/Category";

class App extends Component {

    state = {
        theme: 'greenSlime',
        usuario: {nombre: 'dfernandez', color: 'test'},
        clientsList: [],
        loading: true,
    };

    componentWillMount() {
        // setTimeout(() => {
            this.setState({
                clientsList: [
                    {
                        id: 1,
                        cliente: 'Cliente',
                        categoria: Category.AA,
                        score: 4,
                        version: '189.2.0',
                        instalado: 'on cloud',
                        descripcion: 'descripcion 1',
                        foto: '',
                        pais: 'AR'
                    },
                    {
                        id: 2,
                        cliente: 'Cliente 2',
                        categoria: Category.A,
                        score: 9,
                        version: '189.2.0',
                        instalado: 'on cloud',
                        descripcion: 'descripcion 1',
                        foto: '',
                        pais: 'CL'
                    },
                    {
                        id: 3,
                        cliente: 'Cliente 3',
                        categoria: Category.B,
                        score: 6,
                        version: '189.2.0',
                        instalado: 'on cloud',
                        descripcion: 'descripcion 1',
                        foto: '',
                        pais: 'MX'
                    },
                    {
                        id: 4,
                        cliente: 'Cliente 4',
                        categoria: Category.C,
                        score: 8,
                        version: '189.2.0',
                        instalado: 'on premise',
                        descripcion: 'descripcion 1',
                        foto: '',
                        pais: 'US'
                    },
                    {
                        id: 5,
                        cliente: 'Cliente 5',
                        categoria: Category.AA,
                        score: 4,
                        version: '189.2.0',
                        instalado: 'on premise',
                        descripcion: 'descripcion 1',
                        foto: '',
                        pais: 'CA'
                    },
                    {
                        id: 6,
                        cliente: 'Cliente 6',
                        categoria: Category.C,
                        score: 5,
                        version: '189.2.0',
                        instalado: 'on premise',
                        descripcion: 'descripcion 1',
                        foto: '',
                        pais: 'AR'
                    },
                    {
                        id: 7,
                        cliente: 'Cliente 7',
                        categoria: Category.AA,
                        score: 1,
                        version: '189.2.0',
                        instalado: 'on cloud',
                        descripcion: 'descripcion 1',
                        foto: '',
                        pais: 'CL'
                    },

                ],
                loading: false,
            })
        // }, 1000);
    }

    changeTheme = (theme) => {
        this.setState({
            theme: theme
        })
    };

    renderCards = () => {
        // const { clientsList } = this.state;
        const clientsList = this.state.clientsList;

        return clientsList.map((client, index) => {
            return (
                <Card key={index} cardInfo={client} />
            )
        })
    };

    render() {
        // const { usuario, clientsList } = this.state;
        const theme = this.state.theme;
        const usuario = this.state.usuario;
        const clientsList = this.state.clientsList;

        const scoreColor = getScoreColor(6);
        return (
            <div className={theme}>
                <Header userName={usuario.nombre}
                        clientsList={clientsList}
                        onThemeSelected={this.changeTheme}
                />
                {/* <HomeSearchBar/>
                <div className='cards-container layout-row layout-wrap'>
                    {this.renderCards()}
                </div> */}
                <div className='client-container layout-column' >
                    <div className='title-container layout-row'>
                        <div>
                            <div className='subtitle'>On Cloud</div>
                            <div className='title'>Cliente 1</div>
                            <div className='category layout-row'>
                                <div className='stars'>
                                    stars
                                </div>
                                <div className='subtitle'>CLIENTE AA</div>
                            </div>
                        </div>
                        <div className='flex'></div>
                        <div className='stats-container layout-row'>
                            <div>
                                <div className='subtitle-dark'>VERSIÓN</div>
                                <div className='version'>189.25.23</div>
                                <div className='date'>12 de Marzo 2018</div>
                            </div>
                            <div className='score' style={{ backgroundColor: scoreColor }}>
                                6
                            </div>
                        </div>
                    </div>
                    <div className='bigCard-container'>
                        <div className='big-card'>
                            <div className='bigcard-title-container layout-row'>
                                <div className='title'>Uso</div>
                                <div className='flex'></div>
                                <div className='texto-base'>Comparar con:</div>
                                <div className='text-link active'>período anterior</div>
                                <div className='text-link'>Objetivo</div>
                            </div>
                            <div className='bigcard-content-container layout-row'>
                              <div flex></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
