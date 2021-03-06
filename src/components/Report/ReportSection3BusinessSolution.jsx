import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function ReportSection3BusinessSolution () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);

    return (
        <>
            <Paper className="paper" elevation={3}>
                <div className="reportSectionThree">
                    <div className="sectionThreeTitle">
                        <h1 className="pageHeader">03. BUSINESS SOLUTION</h1>
                        <hr className="dotted"></hr>
                        <p className="businessModel">{enterpriseAnswers.businessModel3}</p>
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
            <Paper className="paper sectionThreeSecondPartPadding" elevation={3}>
                <div className="sectionThreeSecondPart">
                    <p className="testimonial">{enterpriseAnswers.testimonial3}</p>
                </div>
                <hr className="section3Line"></hr>
                <h1 className="painPoints">Pain Points we work to solve</h1>
                <div className='painPointsContainer'>
                    <Box> 
                    <Grid id="painPointGrid" 
                        container 
                        spacing={3}
                    >
                        {enterpriseAnswers.painPoints?.map(point => (
                            <>
                                <Grid item xs={4}>
                                    {point === 'Process - areas where you could provide more convenient processes for your customers' 
                                        && <> <img className="painPointPic" src={`/images/PainPoints/process.png`}/> 
                                                <h3 className="painPointPicText">Process</h3></>}
                                    {point === 'Financial - areas where your customers are spending too much. money' 
                                        && <> <img className="painPointPic" src={`/images/PainPoints/financial.png`}/>
                                                <h3 className="painPointPicText">Financial</h3></>}
                                    {point === 'Productivity - areas where your customer wants to be more efficient or productive' 
                                        && <><img className="painPointPic" src={`/images/PainPoints/productivity.png`}/>
                                                <h3 className="painPointPicText">Productivity</h3></>}
                                    {point === 'Support - areas where customers are not receiving the support they need' 
                                        && <><img className="painPointPic" src={`/images/PainPoints/support.png`}/>
                                                <h3 className="painPointPicText">Support</h3></>}
                                </Grid>
                                <Grid item xs={8}>
                                    <p>{point}</p>
                                </Grid>
                            </>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </Paper>
        </>
    )
};

export default ReportSection3BusinessSolution;