import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ReportSection5Chart from './ReportSection5Chart';


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
                        <div></div>
                        

                    </div>
                </div>
            </Paper>
        </>
    )
};

export default ReportSection5Market;