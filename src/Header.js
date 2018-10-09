import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';


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
                <div className="item">
                    <div className='title'>{client.cliente}</div>
                </div>
            )
        })
    }

    
    render (){
        return(
            <div>

                <AppBar position="static">
                    <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <div className="flexcontent"></div>
                    <span>{this.props.userName}</span>
                    </Toolbar>
                </AppBar>
              
                <Drawer
                    variant='persistent'
                    open={this.state.drawerIsOpen}
                    className='drawer'
                    >
                    <div className="drawerHeader layout-row">
                    <div className="title">Clientes</div>
                    </div>
                    <div className="clientList">{this.getClients()}</div>
                </Drawer>
             
                
            </div>
        )
    }

}

export default Header;