import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {bannerImage} from '../assets';
import {styles} from "../assets/WizardStyle";

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
                    <AppBar title="" style={styles.appBar}/>
                    <div style={styles.welcomeContainer}>
                        <div style={styles.welcomeSection}>
                            <div style={styles.header}>לאיזו מטרה אתם מחפשים דירה?</div>
                            <br/>
                            <div style={styles.purposeContainer}>
                                <RaisedButton
                                    label="מגורים"
                                    labelStyle={styles.buttonColor}
                                    backgroundColor={'#3F3D56'}
                                    style={styles.button}
                                    onClick={this.continue("residence")}
                                />
                                <RaisedButton
                                    label="השקעה"
                                    labelStyle={styles.buttonColor}
                                    backgroundColor={'#3F3D56'}
                                    style={styles.button}
                                    onClick={this.continue("investment")}
                                />
                            </div>
                        </div>
                        <div style={styles.imageContainer}>
                            <img src={bannerImage}/>
                        </div>
                    </div>
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Purpose;
