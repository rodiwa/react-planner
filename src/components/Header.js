import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

const appBarStyle = {
    marginBottom: 20,
    textAlign: 'center'
};

/*const TITLE = {
    loggedIn: 'Logged In',
    notLoggedIn: 'Not logged in'
}*/

/*class LoggedIn extends Component {
    render() {
        return (
            <IconMenu 
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', veritcal: 'top' }}
                targetOrigin={{ horizontal: 'left', veritcal: 'bottom' }} >
                <MenuItem primaryText='Settings'/>
                <MenuItem primaryText='Help'/>
                <MenuItem primaryText='Logout'/>
            </IconMenu>
        );
    
    }
}*/

class Header extends Component {
    renderIconMenu() {
        return (
            <IconMenu 
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', veritcal: 'top' }}
                targetOrigin={{ horizontal: 'left', veritcal: 'bottom' }} >
                <MenuItem primaryText='Settings'/>
                <MenuItem primaryText='Help'/>
                <MenuItem primaryText='Logout'/>
            </IconMenu>
        );
                
            
    }
    
    logInUser() {
        this.props.logInUser();
    }
    
    logOutUser() {
        this.props.logOutUser();
    }
    
    renderHeaderBar() {
        const props = this.props;
        if (props.isLogged) {
            /*return <AppBar style={appBarStyle} title={TITLE.loggedIn} iconElementRight={<LoggedIn />} />*/
            return <AppBar style={appBarStyle} iconElementRight={<FlatButton onClick={this.logOutUser.bind(this)} label='Log Out'/>} />
        } else {
            return <AppBar style={appBarStyle} iconElementRight={<FlatButton onClick={this.logInUser.bind(this)} label='Log In'/>} />
        }
    }
    render() {
        return (
            <div>
                { this.renderHeaderBar() }
            </div>
        );
    }
}

export default Header;