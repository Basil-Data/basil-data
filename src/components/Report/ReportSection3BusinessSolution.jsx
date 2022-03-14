import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportSection3BusinessSolution () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);

    return (
        <>
            <Paper className="paper" elevation={3}>
                <div className="reportSectionThree">
                    <div className="sectionThreeTitle">
                        <h1>03. BUSINESS SOLUTION</h1>
                        <hr className="dotted"></hr>
                        <p>{enterpriseAnswers.businessModel3}</p>
                    </div>
                    <div className="technicalApproach">
                            <h3 className="technicalTitle">Technical Approach</h3>
                            <h3 className="technicalTitle">
                                {enterpriseAnswers.technologies && enterpriseAnswers?.technologies.join(", ")}
                            </h3>
                    </div>
                    <div className="sectionColor sectionThreeColor">
                        <div className="technicalApproach">
                                <h3 className="technicalTitle sectorTitle">Sector:</h3>
                                <h3 className="technicalTitle sectorText">
                                    {enterpriseAnswers.operatingSector && enterpriseAnswers?.operatingSector.join(", ")}
                                </h3>
                        </div>
                        <div className="technicalApproach">
                                <h3 className="technicalTitle sectorTitle">Customer Profile:</h3>
                                <h3 className="technicalTitle sectorText">
                                    {enterpriseAnswers.payingCustomerProfile3}
                                </h3>
                        </div>
                        <div className="technicalApproach">
                                <h3 className="technicalTitle sectorTitle">Primary Competitors:</h3>
                                <h3 className="technicalTitle sectorText">
                                    {enterpriseAnswers.mainCompetitors3}
                                </h3>
                        </div>
                        <div className="differentiatingFactors">
                                <h3 className="factor">Differentiating Factors:</h3>
                                <h3 className="factor">
                                    {enterpriseAnswers.differFromCompetitors3}
                                </h3>
                        </div>
                    </div>  
                </div>
            </Paper>
            <Paper className="paper" elevation={3}>
                <div className="sectionThreeSecondPart">
                    <p className="testimonial">{enterpriseAnswers.testimonial3}</p>
                </div>
                <hr className="section3Line"></hr>
                <h1 className="painPoints">Pain Points we work to solve</h1>
                <div>
                    {enterpriseAnswers.painPoints?.map(point => (
                        <p className="painPointTexts" key={point}>{point}</p>
                    ))}
                </div>
            </Paper>
        </>
    )
};

export default ReportSection3BusinessSolution;