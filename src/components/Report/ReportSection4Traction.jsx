import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportSection4Traction () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);
    const section4 = useSelector(store => store.section4Enterprise);
    const progressIndicators = useSelector(store => store.reportReducer.progressIndicators);
    const investmentStage = useSelector(store => store.reportReducer.investmentStage)

    useEffect(() => {
        dispatch({
          type: "FETCH_ENTERPRISE_SECTION_FOUR",
        });
      }, []);

    return (
        <>
            <Paper className="paper" elevation={3}>
                <div className="reportSectionOne">
                    <div className="pageHeader">
                        <h1>04. TRACTION</h1>
                    </div>
                        
                        <div className="sectionFourIntro">
                        <hr className="dotted"/>
                            <h2>Traction to Date: What stage of development is your PRODUCT in?</h2>
                            
                            <img src={'/images/DevelopmentStage/devStageBar.png'} />

                            {section4.developmentStageId === 1 && 
                                <img src={'/images/DevelopmentStage/devStage1.png'} />
                            }
                            {section4.developmentStageId === 2 && 
                                <img src={'/images/DevelopmentStage/devStage2.png'} />
                            }
                            {section4.developmentStageId === 3 && 
                                <img src={'/images/DevelopmentStage/devStage3.png'} />
                            }
                            {section4.developmentStageId === 4 && 
                                <img src={'/images/DevelopmentStage/devStage4.png'} />
                            } 
                            {section4.developmentStageId === 5 && 
                                <img src={'/images/DevelopmentStage/devStage5.png'} />
                            } 
                            {section4.developmentStageId === 6 && 
                                <img src={'/images/DevelopmentStage/devStage6.png'} />
                            }
                            
                            
                            


                        </div>
                        <div className="introContainer">
                            <h3>SALES AND MARKETING SPENDING</h3>
                            <h3 className="sectionFourNumbers">${enterpriseAnswers.marketingExpenses4}</h3>
                            <h3>CUSTOMERS ACQUIRED IN THAT PERIOD</h3>
                            <h3 className="sectionFourNumbers">{enterpriseAnswers.newCustomers4}</h3>
                            <h3>CAC</h3>
                            <h3 className="sectionFourNumbers">${enterpriseAnswers.customerAcquisitionCost4}</h3>

                        </div>
                </div>
                <div className="sectionColor sectionFourColor">
                    <div className="sectionFourParagraph">
                        <br />
                        <h2 className="section4ParagraphHeader">GROWTH</h2>
                        <br />
                        </div>
                        <div className="growth">

                        <h2 className="section4ProgressHeader">Progress Indicators:</h2>
                            
                        <ul>
                            {progressIndicators?.map(use => (
                                <div><li><h3>{use}</h3></li></div>
                            ))}
                        </ul>
                        </div>
                        <div className="indicatorDetails">
                        <h2>Indicator Details:</h2>

                        <ul>
                            <li>
                                <h3>
                                    {enterpriseAnswers.progressExplanationOne4}
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    {enterpriseAnswers.progressExplanationTwo4}
                                </h3>
                            </li>
                        </ul>
                        </div>

                        <div className="userGrowth">
                            <h2 className="userGrowthHeader">6-Month User Growth</h2>
                            
                            <h2>{enterpriseAnswers.customerGrowth4}%</h2>
                        </div>

                        <div className="revenueGrowth">
                            <h2 className="userGrowthHeader">
                                6-Month Revenue Growth
                            </h2>

                            <h2>{enterpriseAnswers.averageGrowth4}%</h2>
                        </div>

                        <div>
                            <hr className="dotted"/>

                            <h2 className="fundingHeader">
                                FUNDING
                            </h2>

                            <div className="investmentStage">
                                <h3>
                                    What stage of investment is your organization in?
                                </h3>

                                <h3 className="fundingHeader">
                                    {investmentStage}
                                </h3>
                            </div>

                            <div className="fundingReceived">
                                <h3>
                                    How much have you received in funding to date?
                                </h3>

                                <h3 className="fundingHeader">
                                    $ {enterpriseAnswers.fundingReceived4}
                                </h3>
                            </div>
                        </div>
                        
                    

                    
                </div>
            </Paper>
            


        </>
    )
};

export default ReportSection4Traction;