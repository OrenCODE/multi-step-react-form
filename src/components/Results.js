import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import {styles} from "../assets/WizardStyle";
import {bannerImage} from "../assets";

class Results extends Component {
    render() {
        const {results} = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="" style={styles.appBar}/>
                    <div style={styles.welcomeContainer}>
                        <div style={styles.imageContainer}>
                            <img src={bannerImage}/>
                        </div>
                        <div style={styles.resultsSection}>
                            <div style={styles.resultsHeader}>:עפ״י מידע שמסרתם ותוצאות המודל, אתם יכולים לרכוש נכס
                                בסכום של
                            </div>
                            <div style={styles.resultsInvestmentContainer}>
                                <div style={styles.resultsInvestment}>
                                    <div>סך ההשקעה הצפויה</div>
                                    <div>{results?.maxPrice ?? '₪ 1,487,400'}</div>
                                </div>
                                <h1 style={styles.propertyPrice}>{results?.propertyPrice ?? '₪ 1,340,000'}</h1>
                            </div>
                            <div style={styles.note}>.ריכזנו עבורכם את כל הפרטים כדי להמחיש לכם את עלוית רכשית הנכס ולתמוך בקבלת ההחלטה
                                שלכם
                            </div>
                            <div style={columns}>
                                <div style={cardContainer}>
                                    <div>עלוית השבחה</div>
                                    <div>{results?.maxPrice ?? '₪ 14,400'}</div>
                                </div>
                                <div style={cardContainer}>
                                    <div>הוצאות רכישה (3%)</div>
                                    <div>{results?.capitalEquity ?? '₪ 40,200'}</div>
                                </div>
                                <div style={cardContainer}>
                                    <div>מס רכישה (8%)</div>
                                    <h3>{results?.tax ?? '₪ 107,200'}</h3>
                                </div>
                            </div>
                            <div style={secondContainer}>
                                <div style={capitalEquity}>
                                    <div>{'static'}</div>
                                    <div>{'27%'}</div>
                                    <div>הון עצמי</div>
                                </div>
                                <div style={regularLoan}>
                                    <div>{results['regularLoan']?.value ?? ''}</div>
                                    <div>{results['regularLoan']?.years ?? ''}</div>
                                    <div>{results['regularLoan']?.payment ?? ''}</div>
                                    <div>{'static'}</div>
                                    <div>{'5%'}</div>
                                    <div>הלוואה משלימה</div>
                                </div>
                                <div style={mainMortgage}>
                                    <div>{results['mainMortgage']?.value ?? ''}</div>
                                    <div>{results['mainMortgage']?.years ?? ''}</div>
                                    <div>{results['mainMortgage']?.payment ?? ''}</div>
                                    <div>{'static'}</div>
                                    <div>{'5%'}</div>
                                    <div>משכנתה</div>
                                </div>
                                <div>Sum: ?</div>
                            </div>
                        </div>
                    </div>
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
