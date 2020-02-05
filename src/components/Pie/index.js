import styled from 'styled-components'
import {Doughnut} from 'react-chartjs-2'
import React from 'react'

const chartOptions = {
    maintainAspectRatio: false,
    cutoutPercentage: 68,
    legend: {
        display: false
    }
}

function processData(data) {
    return {
        datasets: [{
            data: data.map(p => p.value),
            backgroundColor: data.map(p => p.color),
        }],
        labels: data.map(p => p.label)
    }
}

const Container = styled.div`
    height:320px;
    width:320px;
`


export default class Pie extends React.Component {

    static defaultProps = {
        data: [{
            value: 401598,
            label:"הון עצמי",
            color: "#3f3d56"
        }, {
            value: 74370,
            label: "הלוואה משלימה",
            color: "#cccccc"
        }, {
            value:1011432,
            label:"משכנתה",
            color:"#09b8e2"
        }],
        containerStyle:{}
    }

    render() {
        const {data, containerStyle} = this.props
        return (
            <Container style={containerStyle}>
                <Doughnut
                    data={processData(data)}
                    options={chartOptions}
                />
            </Container>
        )
    }
}