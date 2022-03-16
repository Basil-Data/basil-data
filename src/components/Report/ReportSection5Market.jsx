import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ReportSection5Chart from './ReportSection5Chart';
import './Report.css';


//Styling/MUI
import Paper from '@mui/material/Paper';

function ReportSection5Market () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)


    return (
        <>
            <Paper className="paper" elevation={3}>
                <div className="reportSectionThree">
                    <div className="sectionFiveTitle">
                        <h1>05. Market</h1>
                        <hr className="dotted"></hr>
                        <ReportSection5Chart />
                        <div className="section5ChartQuestions">
                            <p>Total Addressable Market - What is the size of the Total Addressable Market in US Dollars?</p>
                            <p>Serviceable Addressable Market - What is the size of the Serviceable Addressable Market in US Dollars?</p>
                            <p>Serviceable Addressable Market - What is the size of the Serviceable Obtainable Market in US Dollars?</p>
                        </div>
                        <div className="section5MarketAssumptions">
                            <h3>Market Assumptions</h3>
                            <h4>{enterpriseAnswers.whyRealistic5}</h4>
                        </div>

                        

                    </div>
                </div>
                <div className="sectionColor sectionThreeColor"></div>
            </Paper>
        </>
    )
};

export default ReportSection5Market;