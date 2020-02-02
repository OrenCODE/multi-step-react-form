import React, {Component} from 'react';
import Welcome from "./Welcome";
import Purpose from "./Purpose";
import CapitalEquity from "./CapitalEquity";
import MonthlyIncome from "./MonthlyIncome";
import MonthlyExpenses from "./MonthlyExpenses";
import SumRegularPayments from "./SumRegularPayments";
import MonthlySavings from "./MonthlySavings";
import ResidentialHouseOwner from "./ResidentialHouseOwner";
import Age from "./Age";
import Confirm from "./Confirm";
import Results from './Results';
import axios from 'axios'
import Success from './Success';

class UserForm extends Component {

    state = {
        step: 0,
        purpose: '',
        capitalEquity: null,
        monthlyIncome: null,
        monthlyExpenses: null,
        sumRegularPayments: null,
        monthlySavings: null,
        residentialHouseOwner: null,
        age: null,
        isLoading: false,
        results: []
    };

    getDataFromService = () => {
        const {purpose, capitalEquity, monthlyIncome, monthlyExpenses, sumRegularPayments, monthlySavings, residentialHouseOwner, age} = this.state;
        this.setState({isLoading: true});
        axios.post(` http://localhost:3333/prospects/new`, {
            purpose,
            capitalEquity,
            monthlyIncome,
            monthlyExpenses,
            sumRegularPayments,
            monthlySavings,
            residentialHouseOwner,
            age
        }).then((res) => {
                this.setState({
                results: res.data,
                isLoading: false
                })
            })

    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    };

    setPurpose = purposeType => {
        this.setState({
            purpose: purposeType
        })
    };

    setHouseOwnerStatus = status => {
        this.setState({
            residentialHouseOwner: status
        })
    };

    render() {
        const {step} = this.state;
        const {purpose, capitalEquity, monthlyIncome, monthlyExpenses, sumRegularPayments, monthlySavings, residentialHouseOwner, age, results} = this.state;
        const values = {
            purpose,
            capitalEquity,
            monthlyIncome,
            monthlyExpenses,
            sumRegularPayments,
            monthlySavings,
            residentialHouseOwner,
            age
        };

        switch (step) {
            case 0:
                return (
                    <Welcome
                        nextStep={this.nextStep}
                    />
                );
            case 1:
                return (
                    <Purpose
                        nextStep={this.nextStep}
                        setPurpose={this.setPurpose}
                    />
                );
            case 2:
                return (
                    <CapitalEquity
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <MonthlyIncome
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <MonthlyExpenses
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 5:
                return (
                    <SumRegularPayments
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 6:
                return (
                    <MonthlySavings
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 7:
                return (
                    <ResidentialHouseOwner
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        setHouseOwnStatus={this.setHouseOwnerStatus}
                    />
                );
            case 8:
                return (
                    <Age
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        getDataFromService={this.getDataFromService}
                        values={values}
                    />
                );
            case 9:
                return (
                    <Results results={results}/>
                );
        }
    }
}

export default UserForm;
