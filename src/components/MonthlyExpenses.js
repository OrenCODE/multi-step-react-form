import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class MonthlyExpenses extends Component {

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
                    <h1>?כמה הוצאות יש לכם כל חודש</h1>
                    <br/>
                    <TextField
                        // hintText="הוצאות"
                        onChange={handleChange('monthlyExpenses')}
                        defaultValue={values.monthlyExpenses}
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

export default MonthlyExpenses;
