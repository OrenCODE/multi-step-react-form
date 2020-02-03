import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import RaisedButton from 'material-ui/RaisedButton';
import {styles} from "../assets/WizardStyle";
import {bannerImage} from "../assets";

class Age extends Component {

    continue = e => {
        e.preventDefault();
        if(this.props.values.age === 0){
            this.props.setErrors('ageError');
        } else if(!this.props.errors.ageError) {
            this.props.nextStep()
        }
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    };

    render() {
        const {errors, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="" style={styles.appBar}/>
                    <div style={styles.welcomeContainer}>
                        <div style={styles.imageContainer}>
                            <img src={bannerImage}/>
                        </div>
                        <div style={styles.welcomeSection}>
                            <h1 style={styles.header}>?מהו גילכם</h1>
                            <br/>
                            <div style={styles.input}>
                                <CurrencyTextField
                                    minimumValue="0"
                                    maximumValue="120"
                                    variant="standard"
                                    currencySymbol=""
                                    onChange={handleChange('age')}
                                    helperText={errors.ageError ? 'נא הזינו גיל תקין': null}
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
                                    label="סיום"
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

export default Age;
