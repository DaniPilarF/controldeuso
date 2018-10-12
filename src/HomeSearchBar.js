import React, {Component} from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';

class HomeSearchBar extends Component{
render(){
    return(
        <div className="homesearch layout-row">
            <div className="header-title">Clientes</div>
            <div className="flex"></div>
            <div className="filterbox layout-row">
                <div className="texto-base">Ordenar por:</div>
                <div className="custom-select">
                    <select>
                        <option>Score</option>
                        <option>País</option>
                        <option>Categoría</option>
                        <option>Versión</option>
                    </select>
                </div>
                <ArrowUpwardIcon className="icon"/>
                <ArrowDownwardIcon className="icon"/>
            </div>
        </div>
    )
}
}

export default HomeSearchBar