import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Paper from '@mui/material/Paper';

function ReportSection4Traction () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);
    const section4 = useSelector(store => store.section4Enterprise);

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
                        <h2 className="section4ParagraphHeader">INCOME</h2>
                        <br />
                        <h3 className="generatingRev">{enterpriseAnswers.generatingRevenue4 === 'true' && 
                            <img className="checkPic" src="/images/DevelopmentStage/incomeCheck.png" /> }
                            Are you generating revenue?
                        </h3>
                        <div>
                            <h2 className="sectionFourParagraphHeader">
                                USER GROWTH
                            </h2>

                            
                            <h2 className="sectionFourParagraphHeader">UP {enterpriseAnswers.customerGrowth4}%</h2>
                            <p className="sectionFourParagraphHeader">Over the past 6 months</p>
                        </div>
                    </div>

                    
                </div>
            </Paper>
            


        </>
    )
};

export default ReportSection4Traction;