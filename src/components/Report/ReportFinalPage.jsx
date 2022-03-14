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
                <p className="disclaimer">This content must not be copied or disseminated without
                direct permission from Basil Data. Social and
                environmental issues are inherently complex and this
                report is meant for informational purposes only. You
                should not construe any such information or material as
                legal, tax, investment, financial, or other advice. All content
                is information of a general nature and does not address
                the circumstances of any particular individual or entity.</p>
            </div>
        </Paper>
    )
};

export default ReportFinalPage;