import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class Purpose extends Component {

    continue = purposeType => e => {
        e.preventDefault();
        this.props.setPurpose(purposeType);
        this.props.nextStep()
    };

    render() {
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title=""/>
                    <h1>?לאיזו מטרה אתם מחפשים דירה</h1>
                    <br/>
                    <RaisedButton
                        label="מגורים"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue("residence")}
                    />
                    <RaisedButton
                        label="השקעה"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue("investment")}
                    />
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
};

export default Purpose;
