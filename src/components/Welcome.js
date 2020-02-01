import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class Welcome extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    };

    render() {
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title=""/>
                    <h1>תנו לנו למצוא בשבילכם את השקעת הנדלן המתאימה לכם</h1>
                    <div className="text">ענו על 7 שאלות קצרות ותהפכו את השקעת הנדלן שלכם לחכמה, בטוחה ופשוטה יותר</div>
                    <RaisedButton
                        label="בואו נתחיל"
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

export default Welcome;
