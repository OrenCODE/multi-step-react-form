import React from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider/lib/Slider'
import Subtitle from '../Subtitle'

const SliderContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:300px;
    height:104px;
    justify-content:space-between;
    margin-left:47px;
    margin-bottom: 37px;
`

const SliderRangeContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`


const SliderValueText = styled.span`
font-size: 26px;
letter-spacing: 0;
color: #3F3D56;
opacity: 1;
`

const SliderRangeText = styled.span`
font-size: 12px;
letter-spacing: 0;
color: #3F3D56;
opacity: 1;
`

const handleStyle = {
    width: '18px',
    height: '18px',
    background: '#FFFFFF',
    border: '2px solid #3F3D56',
    opacity: 1,
    top:'3px'
}

const trackStyle = {
    backgroundColor:'#09B8E2',
    height:'2px'
}

const railStyle={
    backgroundColor:'#3F3D56',
    height:'2px'
}

function noop() {

}

export default class RangeSlider extends React.Component {

    static defaultProps = {
        minValue:1000,
        maxValue: 5000,
        stepSize:500,
        label:'סליידר בדיקה',
        onChange:noop,
    }

    constructor(props){
        super(props)

        this.state ={
            value: props.minValue
        }
    }

    updateValue = (val) => {
        this.setState({value:val})

        if(typeof this.props.onChange === 'function'){
            this.props.onChange(val)
        }
    }

    render() {
        const {maxValue, minValue, stepSize, label} = this.props
        const {value} = this.state

        return (
            <SliderContainer>
                <Subtitle>{label}</Subtitle>
                <SliderValueText>{value} ₪</SliderValueText>
                <Slider
                    reverse
                    handleStyle={handleStyle}
                    trackStyle={trackStyle}
                    railStyle={railStyle}
                    min={minValue}
                    max={maxValue}
                    step={stepSize}
                    onChange={this.updateValue}
                    style={{maxWidth:'calc(100% - 18px)', marginRight:'9px'}}/>
                <SliderRangeContainer>
                    <SliderRangeText>{minValue} ₪</SliderRangeText>
                    <SliderRangeText>{maxValue} ₪</SliderRangeText>
                </SliderRangeContainer>
            </SliderContainer>
        )
    }
}