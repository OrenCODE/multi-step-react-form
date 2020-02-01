import React, {Component, Fragment} from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class MonthlyIncome extends Component {

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
                    <AppBar title=""/>
                    <h1>?כמה כסף נכנס לכם לחשבון כל חודש</h1>
                    <br/>
                    <TextField
                        // hintText="הכנסה חודשית"
                        onChange={handleChange('monthlyIncome')}
                        defaultValue={values.monthlyIncome}
                    />
                    <br/>
                    <RaisedButton
                        label="חזור"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="המשך"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default MonthlyIncome;
