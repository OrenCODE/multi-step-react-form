import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class Results extends Component {
    render() {
        const {results} = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title=""/>
                    <div className="container">
                        <h3>:עפ״י מידע שמסרתם ותוצאות המודל, אתם יכולים לרכוש נכס בסכום של</h3>
                        <h1>{results?.propertyPrice ?? ''}</h1>
                        <div style={columns}>
                            <div style={cardContainer}>
                                <div>סך ההשקעה הצפויה</div>
                                <h1>{results?.maxPrice ?? ''}</h1>
                            </div>
                            <div style={cardContainer}>
                                <div>הוצאות רכישה (3%)</div>
                                <h3>{results?.capitalEquity ?? ''}</h3>
                            </div>
                            <div style={cardContainer}>
                                <div>מס רכישה (8%)</div>
                                <h3>{results?.tax ?? ''}</h3>
                            </div>
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
