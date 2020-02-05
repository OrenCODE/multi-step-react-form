import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import {styles} from "../assets/WizardStyle";
import {resultsPhoto} from "../assets";
import ResultsSlider from "./ResultsSlider";
import './Results.css';

class Results extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    };

    render() {
        const {results} = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="" style={styles.appBar}/>
                    <div style={styles.resultsContainer}>
                        <div style={styles.resultsSection}>
                            <div className="resultsHeader">עפ״י מידע שמסרתם ותוצאות המודל, אתם יכולים לרכוש נכס
                                בסכום של:
                            </div>
                            <div style={styles.resultsInvestmentContainer}>
                                <h1 style={styles.propertyPrice}>{results?.propertyPrice ?? '₪ 1,340,000'}</h1>
                                <div className="resultsInvestment">
                                    <div style={{color: '#1EA3C5', alignSelf: 'flex-end' , display: 'flex'}}>סך ההשקעה הצפויה</div>
                                    <div>{results?.maxPrice ?? '₪ 1,487,400'}</div>
                                </div>
                            </div>
                            <div style={styles.note}>ריכזנו עבורכם את כל הפרטים כדי להמחיש לכם את עלוית רכשית הנכס
                                ולתמוך בקבלת ההחלטה שלכם.
                            </div>
                            <div className="columns">
                                <div style={cardContainer}>
                                    <div style={{color: '#1EA3C5'}}>מס רכישה (8%)</div>
                                    <div>{results?.tax ?? '₪ 107,200'}</div>
                                </div>
                                <div style={cardContainer}>
                                    <div style={{color: '#1EA3C5'}}>הוצאות רכישה (3%)</div>
                                    <div>{results?.capitalEquity ?? '₪ 40,200'}</div>
                                </div>
                                <div style={cardContainer}>
                                    <div style={{color: '#1EA3C5'}}>עלוית השבחה</div>
                                    <div>{results?.maxPrice ?? '₪ 14,400'}</div>
                                </div>
                            </div>
                        </div>
                        <div style={styles.resultsImageContainer}>
                            <img src={resultsPhoto}/>
                        </div>
                    </div>
                    <div style={{padding: '30px 0' , background: 'white'}}></div>
                    <ResultsSlider/>
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Results;

const columns = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)'
};

const cardContainer = {
    display: 'grid',
    gridTemplateRows: 'auto'
};

const secondContainer = {
    display: 'grid',
    gridTemplateRows: 'repeat(4,1fr)'
};

const capitalEquity = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)'
};

const regularLoan = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)'
};

const mainMortgage = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)'
};
