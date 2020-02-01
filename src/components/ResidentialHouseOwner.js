import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class ResidentialHouseOwner extends Component {

    continue = houseOwnStatus => e => {
        e.preventDefault();
       this.props.setHouseOwnStatus(houseOwnStatus);
        this.props.nextStep()
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    };

    render() {
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title=""/>
                    <h1>?האם יש בבעלותכם דירה</h1>
                    <br/>
                    <RaisedButton
                        label="חזור"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="לא"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue(false)}
                    />
                    <RaisedButton
                        label="כן"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue(true)}
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

export default ResidentialHouseOwner;
