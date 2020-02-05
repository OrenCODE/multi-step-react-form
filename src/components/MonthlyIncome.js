import React, {Component, Fragment} from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import {bannerImage} from '../assets';
import {styles} from "../assets/WizardStyle";

class MonthlyIncome extends Component {

    continue = e => {
        e.preventDefault();
        if(this.props.values.monthlyIncome === 0){
            this.props.setErrors('monthlyIncomeError');
        } else if(!this.props.errors.monthlyIncomeError) {
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
                        <div style={styles.welcomeSection}>
                            <div style={styles.header}>כמה כסף נכנס לכם לחשבון כל חודש ?</div>
                            <br/>
                            <div style={styles.input}>
                                <CurrencyTextField
                                    minimumValue="0"
                                    variant="standard"
                                    currencySymbol="₪"
                                    onChange={handleChange('monthlyIncome')}
                                    helperText={errors.monthlyIncomeError ? 'נא הזינו סכום בשקלים': null}
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
                        <div style={styles.imageContainer}>
                            <img src={bannerImage}/>
                        </div>
                    </div>
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

export default MonthlyIncome;
