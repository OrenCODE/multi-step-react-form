import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import {styles} from "../assets/WizardStyle";

class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.getDataFromService();
        this.props.nextStep()
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    };

    render() {
        const {values: {purpose, capitalEquity, monthlyIncome, monthlyExpenses, sumRegularPayments, monthlySavings, residentialHouseOwner, age}} = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="" style={styles.appBar}/>
                    <div style={styles.confirmContainer}>
                        <List>
                            <ListItem
                                primaryText="מטרה"
                                secondaryText={purpose === 'residence' ? 'מגורים' : 'השקעה'}
                            />
                            <ListItem
                                primaryText="הון עצמי"
                                secondaryText={capitalEquity}
                            />
                            <ListItem
                                primaryText="הכנסה חודשית"
                                secondaryText={monthlyIncome}
                            />
                            <ListItem
                                primaryText="הוצאה חודשית"
                                secondaryText={monthlyExpenses}
                            />
                            <ListItem
                                primaryText="סכום ההוצאות הקבועות כל חודש"
                                secondaryText={sumRegularPayments}
                            />
                            <ListItem
                                primaryText="חסכון כל חודש"
                                secondaryText={monthlySavings}
                            />
                            <ListItem
                                primaryText="האם יש בבעלותכם דירה"
                                secondaryText={residentialHouseOwner ? 'כן' : 'לא'}
                            />
                            <ListItem
                                primaryText="גילכם"
                                secondaryText={age}
                            />
                        </List>
                        <br/>
                        <div style={styles.purposeContainer}>
                            <RaisedButton
                                label="אישור והמשך לתוצאות"
                                labelStyle={styles.buttonColor}
                                backgroundColor={'#3F3D56'}
                                style={styles.confirmButton}
                                onClick={this.continue}
                            />
                            <RaisedButton
                                label="חזור"
                                labelStyle={styles.buttonColor}
                                backgroundColor={'#3F3D56'}
                                style={styles.button}
                                onClick={this.back}
                            />
                        </div>
                    </div>
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Confirm;
