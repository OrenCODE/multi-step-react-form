import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {bannerImage} from '../assets';
import {styles} from "../assets/WizardStyle";

class CapitalEquity extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    };

    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="" style={styles.appBar}/>
                    <div style={styles.welcomeContainer}>
                        <div style={styles.imageContainer}>
                            <img src={bannerImage}/>
                        </div>
                        <div style={styles.welcomeSection}>
                            <h1 style={styles.header}>?כמה הון עצמי יש לכם להשקיע</h1>
                            <br/>
                            <div style={styles.input}>
                            <TextField
                                style={inputStyle}
                                onChange={handleChange('capitalEquity')}
                                defaultValue={values.capitalEquity}
                            />
                            </div>
                            <br/>
                            <div style={styles.purposeContainer}>
                            <RaisedButton
                                label="חזור"
                                labelStyle={styles.buttonColor}
                                backgroundColor={'#3F3D56'}
                                style={styles.button}
                                onClick={this.back}
                            />
                            <RaisedButton
                                label="המשך"
                                labelStyle={styles.buttonColor}
                                backgroundColor={'#3F3D56'}
                                style={styles.button}
                                onClick={this.continue}
                            />
                            </div>
                        </div>
                    </div>
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

const inputStyle = {
    textAlign: 'right'
};

export default CapitalEquity;
