import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {bannerImage} from '../assets';
import {styles} from "../assets/WizardStyle";

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
                    <AppBar title="" style={styles.appBar}/>
                    <div style={styles.welcomeContainer}>
                        <div style={styles.imageContainer}>
                            <img src={bannerImage}/>
                        </div>
                        <div style={styles.welcomeSection}>
                            <h1 style={styles.header}>?האם יש בבעלותכם דירה</h1>
                            <br/>
                            <div style={styles.houseResidentialContainer}>
                                <RaisedButton
                                    label="חזור"
                                    labelStyle={styles.buttonColor}
                                    backgroundColor={'#3F3D56'}
                                    style={styles.button}
                                    onClick={this.back}
                                />
                                <RaisedButton
                                    label="לא"
                                    labelStyle={styles.buttonColor}
                                    backgroundColor={'#3F3D56'}
                                    style={styles.button}
                                    onClick={this.continue(false)}
                                />
                                <RaisedButton
                                    label="כן"
                                    labelStyle={styles.buttonColor}
                                    backgroundColor={'#3F3D56'}
                                    style={styles.button}
                                    onClick={this.continue(true)}
                                />
                            </div>
                        </div>
                    </div>
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

export default ResidentialHouseOwner;
