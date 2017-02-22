import React, { Component } from 'react';
import AddWord from './AddWord';
import TagCloud from './TagCloud';
import BeforeLogIn from './BeforeLogIn'

import Paper from 'material-ui/Paper';

const paperStyle = {
    height: 'auto',
    width: '95%',
    margin: 'auto',
    maxWidth: 768,
    padding: 10,
    textAlign: 'center',
    display: 'block',
    padding: '100px 0'
};

const lockStyle = {
    width: 100,
    height: 100
}

class Header extends Component {
    renderWorkspace() {
        const props = this.props;
        if (props.isLogged) {
            return (
                <div>
                    <AddWord words={this.props.words} addWord={this.props.addWord.bind(this)} />
                    <TagCloud onStarClick={this.props.onStarClick.bind(this)} onDeleteItem={this.props.onDeleteItem.bind(this)} words={this.props.words}/>
                </div>
            )
        } else {
            return(
                <BeforeLogIn />
            )
        }
    }
    render() {
        return (
            <div>
                { this.renderWorkspace() }
            </div>
        );
    }
}

export default Header;