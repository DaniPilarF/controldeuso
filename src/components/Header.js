import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import * as Theme from "../constants/Theme";


class Header extends Component {
    state = { drawerIsOpen: false }

    handleDrawerOpen = () => {
        this.setState({ drawerIsOpen: true });
    };

    handleDrawerClose = () => {
        this.setState({ drawerIsOpen: false });
    };

    getClients = () => {
        return this.props.clientsList.map((client, index) =>{
            return(
                <div className="item layout-row" key={index}>
                    <div className='photo-container'></div>
                    <div>
                        <div className='title'>{client.cliente}</div>
                        <div className='texto-base'>{client.descripcion}</div>
                    </div>
                </div>
            )
        })
    };

    render (){
        return(
            <div>

                <AppBar position="static">
                    <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <div className="flexcontent"></div>
                        <span onClick={() => this.props.onThemeSelected(Theme.GREEN_SLIME)}>green</span>
                        <span onClick={() => this.props.onThemeSelected(Theme.ORANGE_SPRITE)}>orange</span>
                    <span>{this.props.userName}</span>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant='persistent'
                    open={this.state.drawerIsOpen}
                    className='drawer'
                    elevation={23}
                    >
                    <div className="drawerHeader layout-row">
                        <div className="header-title">Clientes</div>
                    </div>
                    <div className="clientList">{this.getClients()}</div>
                </Drawer>


            </div>
        )
    }

}

export default Header;
