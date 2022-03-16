import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportFrontPage () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)


    return (
        <Paper className="paper" elevation={3}>
            <div className="frontPage">
                <h2 className='frontPageDate'>{moment().format('MMMM YYYY')}</h2>
                <h2 className='frontPageEnterprise'>{enterpriseAnswers.enterpriseName}</h2>
                <hr className="solid"></hr>
                <h2 className="frontPageImpact">IMPACT OPPORTUNITY PROFILE</h2>
                <img className="frontPageLogo" src={enterpriseAnswers.logoUrl} height={200}/>
            </div>
        </Paper>
    )
};

export default ReportFrontPage;