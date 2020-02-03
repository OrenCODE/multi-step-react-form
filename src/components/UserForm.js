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
import Results from './Results';
import axios from 'axios'
import Success from './Success';

class UserForm extends Component {

    state = {
        step: 0,
        purpose: '',
        capitalEquity: 0,
        capitalEquityError: false,
        monthlyIncome: 0,
        monthlyIncomeError: false,
        monthlyExpenses: 0,
        monthlyExpensesError: false,
        sumRegularPayments: 0,
        sumRegularPaymentsError: false,
        monthlySavings: 0,
        monthlySavingsError: false,
        residentialHouseOwner: null,
        age: 0,
        ageError: false,
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
        if(e.target.value.length === 0) {
            this.setState({[`${input}Error`]: true})
        }else {
            this.setState({[input]: e.target.value});
            this.setState({[`${input}Error`]: false});
            console.log(this.isNumber(e.target.value));
            console.log(this.state.capitalEquity)
        }
    };

   isNumber = (n) => { return !isNaN(parseFloat(n)) && !isNaN(n - 0) };

    setPurpose = purposeType => {
        this.setState({
            purpose: purposeType
        })
    };

    setErrors = errorField => {
        this.setState({[errorField] : true})
    };

    setHouseOwnerStatus = status => {
        this.setState({
            residentialHouseOwner: status
        })
    };

    render() {
        const {step} = this.state;
        const {capitalEquityError, monthlyIncomeError, monthlyExpensesError, sumRegularPaymentsError, monthlySavingsError, ageError} = this.state;
        const errors = {capitalEquityError, monthlyIncomeError, monthlyExpensesError, sumRegularPaymentsError, monthlySavingsError, ageError};
        const {purpose, capitalEquity, monthlyIncome, monthlyExpenses, sumRegularPayments, monthlySavings, residentialHouseOwner, age, results} = this.state;
        const values = {purpose, capitalEquity, monthlyIncome, monthlyExpenses, sumRegularPayments, monthlySavings, residentialHouseOwner, age};

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
                        errors={errors}
                        setErrors={this.setErrors}
                    />
                );
            case 3:
                return (
                    <MonthlyIncome
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        errors={errors}
                        setErrors={this.setErrors}
                    />
                );
            case 4:
                return (
                    <MonthlyExpenses
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        errors={errors}
                        setErrors={this.setErrors}
                    />
                );
            case 5:
                return (
                    <SumRegularPayments
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        errors={errors}
                        setErrors={this.setErrors}
                    />
                );
            case 6:
                return (
                    <MonthlySavings
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        errors={errors}
                        setErrors={this.setErrors}
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
                        errors={errors}
                        setErrors={this.setErrors}
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
