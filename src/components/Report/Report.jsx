import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// importing sections for report
import ReportTableOfContents from './ReportTableOfContents';
import ReportSection1Story from './ReportSection1Story';
import ReportSection2Impact from './ReportSection2-0Impact';
import ReportSection2ImpactOpportunity from './ReportSection2-1ImpactOpportunity';
import ReportSection3BusinessSolution from './ReportSection3BusinessSolution';
import ReportSection4Traction from './ReportSection4Traction';
import ReportSection5Market from './ReportSection5Market';
import ReportSection6ExternalFactors from './ReportSection6ExternalFactors';
import ReportSection7ImpactRisk from './ReportSection7ImpactRisk';
import ReportSection8StartupBarriers from './ReportSection8StartupBarriers';
import ReportSection9NextSteps from './ReportSection9NextSteps';
import ReportFinalPage from './ReportFinalPage';


// Styling
import './Report.css';
import Box from '@mui/material/Box';

function Report () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_REPORT_DETAILS'})
    }, [])

    const enterpriseAnswers = useSelector(store => store.reportReducer)


    return (
        <Box>
        <div className="report">
            <ReportTableOfContents />
            <ReportSection1Story />
            <ReportSection2Impact />
            <ReportSection2ImpactOpportunity />
            <ReportSection3BusinessSolution />
            <ReportSection4Traction />
            <ReportSection5Market />
            <ReportSection6ExternalFactors />
            <ReportSection7ImpactRisk />
            <ReportSection8StartupBarriers />
            <ReportSection9NextSteps />
            <ReportFinalPage />

        </div>
        </Box>
    )
};

export default Report;