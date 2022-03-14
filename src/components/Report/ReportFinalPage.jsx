import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportFinalPage () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)


    return (
        <Paper className="paper" elevation={3}>
            <div className="finalPage">
                <div className="finalLogo">
                    <img src="/images/BasilDataLogo/BasilDataLogo.png"/>
                </div>
                <div className="finalPara">
                    <p>This report was developed by Basil Data. Our objective is to improve
                    communication and transparency between impact investors and social
                    entrepreneurs. Our mission is gather better impact data to maximize
                    funding for those making a positive impact.</p>
                </div>
                <div className="contactInfo">
                    <p>W: www.basildata.com</p>
                    <p>E: impact@basildata.com</p>
                    <p>S: @basildata</p>
                </div>
            </div>
        </Paper>
    )
};

export default ReportFinalPage;