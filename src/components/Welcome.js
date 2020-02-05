import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {bannerImage} from '../assets';
import {styles} from "../assets/WizardStyle";

class Welcome extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    };

    render() {
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="" style={styles.appBar}/>
                    <div style={styles.welcomeContainer}>
                        <div style={styles.welcomeSection}>
                            <h1 style={styles.header}>תנו לנו למצוא בשבילכם את השקעת הנדלן המתאימה לכם</h1>
                            <div style={styles.text}>ענו על 7 שאלות קצרות ותהפכו את השקעת הנדלן שלכם לחכמה, בטוחה ופשוטה
                                יותר
                            </div>
                            <div style={styles.welcomeButton}>
                                <RaisedButton
                                    label="בואו נתחיל"
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
export default Welcome;
