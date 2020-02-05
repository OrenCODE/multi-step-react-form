import React from 'react';
import styled from 'styled-components'
import 'rc-slider/assets/index.css'
import RangeSlider from './RangeSlider/index'
import Title from './Title/index'
import Subtitle from './Subtitle/index'
import Button from './Button/index'
import Pie from './Pie/index'
import './RessultSlider.css'

const SectionBox = styled.div`
    padding: 42px 52px;
    background:#fff;
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
`

const Col = styled.div`
    display:flex;
    flex-direction:column;
`

const Table = styled.table`
    width:100%;
    height:100%;
    table-layout: fixed;
`

const Th = styled.th`
    text-align:center;
`

const Tr = styled.tr`
    border-bottom:1px solid #cccccc;
`

const Td = styled.td`
    text-align:center;
    padding:12px 10px;
`

const ColorSquare = styled.div`
    width: 21px;
    height: 21px;
`
const LargeText = styled.span`
    font-size:30px;
    display:block;
`

class ResultsSlider extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#F2F2F2', padding: '30px'}}>
                <div>
                    <Title>מחשבון השקעה</Title>
                    <SectionBox style={{marginTop: '24px', paddingBottom: '5px'}}>
                        <Row style={{flexWrap: 'wrap'}}>
                            <RangeSlider
                                label="הון עצמי"
                                minValue={50000}
                                maxValue={3000000}
                                defaultValue={50000}/>
                            <RangeSlider
                                label="עלויות שיפוץ"
                                minValue={50000}
                                maxValue={3000000}
                                defaultValue={50000}/>
                            <RangeSlider
                                label="החזר חודשי"
                                minValue={50000}
                                maxValue={3000000}
                                defaultValue={50000}/>
                            <RangeSlider
                                label="מחיר הנכס"
                                minValue={50000}
                                maxValue={3000000}
                                defaultValue={50000}/>
                            <RangeSlider
                                label="שכר דירה"
                                minValue={50000}
                                maxValue={3000000}
                                defaultValue={50000}/>
                            <Button style={{marginTop: '20px'}}>חשב מחדש</Button>
                        </Row>
                    </SectionBox>
                </div>
                <Row style={{marginTop: '24px'}}>
                    <Col style={{width: '60%'}}>
                        <div>
                            <Title>הרכב ההשקעה</Title>
                            <SectionBox style={{marginTop: '24px'}}>
                                <Table>
                                    <thead>
                                    <tr>
                                        <Th></Th>
                                        <Th></Th>
                                        <Th></Th>
                                        <Th></Th>
                                        <Th></Th>
                                        <Th><Subtitle>החזר חודשי</Subtitle></Th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <Td><ColorSquare style={{backgroundColor: '#3F3D56'}}/></Td>
                                        <Td>הון עצמי</Td>
                                        <Td>27%</Td>
                                        <Td>401598</Td>
                                        <Td>5 שנים</Td>
                                        <Td>1842</Td>
                                    </tr>
                                    <tr>
                                        <Td><ColorSquare style={{backgroundColor: '#3F3D56'}}/></Td>
                                        <Td>הון עצמי</Td>
                                        <Td>27%</Td>
                                        <Td>401598</Td>
                                        <Td>5 שנים</Td>
                                        <Td>1842</Td>
                                    </tr>
                                    <tr>
                                        <Td><ColorSquare style={{backgroundColor: '#3F3D56'}}/></Td>
                                        <Td>הון עצמי</Td>
                                        <Td>27%</Td>
                                        <Td>401598</Td>
                                        <Td>5 שנים</Td>
                                        <Td>1842</Td>
                                    </tr>
                                    <tr>
                                        <Td><ColorSquare style={{backgroundColor: '#3F3D56'}}/></Td>
                                        <Td>הון עצמי</Td>
                                        <Td>27%</Td>
                                        <Td>401598</Td>
                                        <Td>5 שנים</Td>
                                        <Td>1842</Td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </SectionBox>
                        </div>
                        <div style={{marginTop: '24px'}}>
                            <Title className="">החזרים חודשי</Title>
                            <SectionBox style={{marginTop: '24px', height: '48px'}}>
                                <Table>
                                    <thead>
                                    <tr>
                                        <Th className="thCol">החזר חודשי</Th>
                                        <Th></Th>
                                        <Th className="thCol">שכר דירה</Th>
                                        <Th></Th>
                                        <Th className="thCol">תזרים חודשי</Th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <Td className="tdColRegular">₪ 33,000</Td>
                                        <Td className="tdCol">+</Td>
                                        <Td className="tdColRegular">₪ 12,000</Td>
                                        <Td className="tdCol">=</Td>
                                        <Td className="tdCol">₪ 21,000</Td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </SectionBox>
                        </div>
                        <div style={{marginTop: '24px'}}>
                            <Title>רווח שנתי</Title>
                            <SectionBox style={{marginTop: '24px', height: '48px'}}>
                                <Table>
                                    <thead>
                                    <tr>
                                        <Th className="thCol">הכנסה שנתית</Th>
                                        <Th></Th>
                                        <Th className="thCol">ריבית שנתית</Th>
                                        <Th></Th>
                                        <Th className="thCol">רווח שנתי</Th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <Td className="tdColRegular">₪ 33,000</Td>
                                        <Td className="tdCol">+</Td>
                                        <Td className="tdColRegular">₪ 12,000</Td>
                                        <Td className="tdCol">=</Td>
                                        <Td className="tdCol">₪ 21,000</Td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </SectionBox>
                        </div>
                    </Col>
                    <Col style={{width: 'calc(40% - 24px)', marginRight: '24px'}}>
                        <div>
                            <Title>עלות ההשקעה</Title>
                            <SectionBox style={{marginTop: '24px'}}>
                                <div style={{width: '100%', height: '320px', position: 'relative'}}>
                                    <Pie containerStyle={{width: '100%', zIndex: 99}}/>
                                    <div style={{
                                        position: 'absolute',
                                        top: '130px',
                                        textAlign: 'center',
                                        width: '100%'
                                    }}>
                                        <Subtitle>סה"כ השקעה צפויה</Subtitle>
                                        <LargeText>₪ 1,240,232</LargeText>
                                    </div>
                                </div>
                                <Row style={{marginTop: '50px'}}>
                                    <Col style={{width: '50%', textAlign: 'right'}}>
                                        <Subtitle>מס רכישה (8%)</Subtitle>
                                        <LargeText>₪ 107,200</LargeText>
                                    </Col>
                                    <Col style={{width: '50%', textAlign: 'right'}}>
                                        <Subtitle>הוצאות רכישה (3%)</Subtitle>
                                        <LargeText>₪ 107,200</LargeText>
                                    </Col>
                                </Row>
                            </SectionBox>
                        </div>
                        <div style={{marginTop: '24px'}}>
                            <Title>תשואה שנתית משכר דירה</Title>
                            <div style={{display: 'grid', marginTop: '24px', height: '132px', background: 'white'}}>
                                <div className="yearX">% 3.2</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ResultsSlider;
