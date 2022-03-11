import { React, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import '../Questionnaire.css'
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';

function SectionFourTraction() {
    const dispatch = useDispatch();
    const section4 = useSelector((store) => store.section4);
    const response = useSelector((store) => store.section4Enterprise);
    const progressIndicator = useSelector((store) => store.section4Enterprise.progressIndicatorId)
    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({
            type: "FETCH_SECTION_FOUR",
        });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        dispatch({
            type: 'UPDATE_SECTION4_RESPONSES',
            payload: {
                id: user.id,
                data: response
            }
        })
    }
    

    // These two functions toggle local state and dispatch the result of the boolean to the server
    function generatingRevenue() {

        setGeneratedRevenue(true)
        dispatch({
            type: 'SET_SECTION4_RESPONSES',
            payload: {
                generatingRevenue4: true
            }
        })
    }

    function notGeneratingRevenue() {
        setGeneratedRevenue(false)
        dispatch({
            type: 'SET_SECTION4_RESPONSES',
            payload: {
                generatingRevenue4: true
            }
        })
    }

    const handleProgress = (event) => {
        const index = progressIndicator.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_SECTION4_RESPONSES",
                payload: {progressIndicatorId: [...progressIndicator, (Number(event.target.value))]}
            });
        } else {
            dispatch({
                type: "SET_SECTION4_RESPONSES",
                payload: {progressIndicatorId: progressIndicator.filter((progressIndicator) => progressIndicator !== Number(event.target.value))}
            });
        }
    }
 

    const [generatedRevenue, setGeneratedRevenue] = useState(false);

    return (
        <>
            <QuestionnaireNav />
            <form className='questionnaireForm'>
                <h1>Section 4 - Traction</h1>
                <p>
                Tell us about the momentum behind your organization!

                In this section you are able to provide more detail about the numbers behind opportunity for growth and recent customer development.  
                </p>
                <h5>
                    What stage of development is your PRODUCT in?
                </h5>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        row
                        name="radio-buttons-group"
                        className='centerHelp'
                    >
                        {section4.results1?.map(development => (
                            <FormControlLabel 
                                key={development.id} 
                                value={development.id}
                                control={<Radio />} 
                                label={development.stage}
                                onChange={(evt => 
                                    dispatch({
                                        type: 'SET_SECTION4_RESPONSES',
                                        payload: { developmentStageId: development.id}
                                    }))} 
                                className='centerHelp' />
                        ))}
                        
                    </RadioGroup>
                <h5>
                    What stage of investment is your ORGANIZATION in?
                </h5>
                
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        row
                        name="radio-buttons-group"
                        className='centerHelp'
                    >

                        {section4.results2?.map(investment => (
                            <FormControlLabel 
                                key={investment.id} 
                                value={investment.id} 
                                control={<Radio/>} 
                                label={investment.stage}
                                onChange={(evt => 
                                    dispatch({
                                        type: 'SET_SECTION4_RESPONSES',
                                        payload: { 
                                            investmentStageId: investment.id}
                                    }))}  
                                className='centerHelp'/>
                        ))}
                
                    </RadioGroup>

                <h5>
                    How much have you received in funding to date?
                </h5>

                <TextField 
                    id="outlined-basic" 
                    label="Amount Funded $" 
                    variant="outlined"
                    value={section4.fundingReceived4}
                    onChange={(evt =>
                        dispatch({
                            type: 'SET_SECTION4_RESPONSES',
                            payload: {
                                fundingReceived4: evt.target.value
                            }
                        }))} />

                <h5>
                    What indicators other than sales show your progress since inception?
                </h5>
                <Box>
                    <FormControl className='questionnaireForm centerHelp'>
                        {section4.results3?.map(use => (
                            <FormControlLabel  
                                key={use.id} 
                                control={
                                    <Checkbox
                                        value={use.id}
                                        onChange={handleProgress} 
                                    />} 
                                label= {use.indicator} />
                        ))}

                    </FormControl>
                </Box>

                <h5>
                Tell us more about the progress shown from each of these indicators and/or any other unique traction you may have gained.
                </h5>

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                <Box
                    sx={{
                        width: 600,
                        maxWidth: '100%',
                    }}
                >
                <TextField 
                    id="outlined-basic" 
                    label="Long Answer Text" 
                    variant="outlined" 
                    multiline rows={5} 
                    fullWidth
                />
                </Box>
                </Grid>

                <h5>
                    What is your customer growth rate over the last 6 months?
                </h5>

                <h6>
                    Please provide a percentage
                </h6>

                <TextField 
                    id="outlined-basic" 
                    label="Growth Percentage" 
                    variant="outlined"
                    value={response.customerGrowth4}
                    onChange={(evt => 
                        dispatch({
                            type: 'SET_SECTION4_RESPONSES',
                            payload: { customerGrowth4: evt.target.value }
                        }))} />

                <h5>
                    Are you generating revenue?
                </h5>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    row
                    name="radio-buttons-group"
                    className='centerHelp'
                >

                <FormControlLabel 
                    labelPlacement="top" 
                    control={<Radio />} 
                    label="Yes" 
                    value="True" 
                    onClick={(evt) => generatingRevenue()}/>
                
                <FormControlLabel 
                    labelPlacement="top" 
                    control={<Radio />} 
                    label="No" value="No" 
                    onClick={(evt) => notGeneratingRevenue()}/>
                    
                   
                
                </RadioGroup>
                 {/* Questions below are generated if the user chooses yes. */}
                {generatedRevenue ? <>
                <h5>
                    What is your average growth in monthly revenue over the past 6 months?
                </h5>

                <h6>
                    Please provide a percentage
                </h6>
                
                <TextField 
                    id="outlined-basic" 
                    label="Percentage" 
                    variant="outlined"
                    value={response.averageGrowth4}
                    onChange={(evt => dispatch({
                        type: 'SET_SECTION4_RESPONSES',
                        payload: {
                            averageGrowth4: evt.target.value
                        }

                    })
                    )} />

                <h5>
                    Are you making a profit?
                </h5>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    row
                    name="radio-buttons-group"
                    className='centerHelp'
                    
                >

                <FormControlLabel 
                    labelPlacement="top" 
                    control={<Radio />} 
                    label="Yes"
                    value='Yes'
                    onChange={(evt => 
                        dispatch({
                            type: 'SET_SECTION4_RESPONSES',
                            payload: { makingProfit4: true }
                        }))} />
                
                <FormControlLabel 
                    labelPlacement="top"  
                    control={<Radio />} 
                    label="No"
                    value='No'
                    onChange={(evt => 
                        dispatch({
                            type: 'SET_SECTION4_RESPONSES',
                            payload: { makingProfit4: false }
                        }))} />

                </RadioGroup>

                
                
                <h5>
                    If yes, what is your net profit margin (%)?
                </h5>

                <h6>
                    (Total Revenue - Total Costs)/ Total Revenue
                </h6>

                <TextField 
                    id="outlined-basic" 
                    label="Net Profit Margin %" 
                    variant="outlined"
                    value={response.netProfitMargin4}
                    onChange={(evt => 
                        dispatch({
                            type: 'SET_SECTION4_RESPONSES',
                            payload: {
                                netProfitMargin4: evt.target.value
                            }
                        }))} />

                <h5>
                    Customer Acquisition Cost (CAC)
                </h5>
                
                <h6>
                    In this brief section we want to gain more insight into the expenses associated with acquiring new customers in a given sales/marketing cycle. Please provide answers to the best of your ability. 

                </h6>

                <h5>
                    What is your most recent Customer Acquisition Cost? (dollars)
                </h5>

                <h6>
                    If known, provide below. If unknown, answer "N/A" and proceed to answer the further questions.
                </h6>

                <TextField 
                    id="outlined-basic" 
                    label="CAC $" 
                    variant="outlined"
                    value={response.customerAcquisitionCost4}
                    onChange={(evt => 
                        dispatch({
                            type: 'SET_SECTION4_RESPONSES',
                            payload: {
                                customerAcquisitionCost4: evt.target.value
                            }
                        }))} />

                <h5>
                    What are your total marketing expenses during one sales/marketing cycle? (in dollars)
                </h5>
                
                <h6>
                    This includes campaigns, marketing salary expenses, overhead expenses, etc.
                </h6>

                <TextField 
                    id="outlined-basic" 
                    label="Marketing Expenses" 
                    variant="outlined"
                    value={response.marketingExpenses4}
                    onChange={(evt => 
                        dispatch({
                            type: 'SET_SECTION4_RESPONSES',
                            payload: {
                                customerAcquisitionCost4: evt.target.value
                            }
                        }))}  />

                <h5>
                    How many new customers have you acquired in your most recent sales/marketing cycle?
                </h5>

                <TextField 
                    id="outlined-basic" 
                    label="New Customers" 
                    variant="outlined"
                    value={response.newCustomers4}
                    onChange={(evt => 
                        dispatch({
                            type: 'SET_SECTION4_RESPONSES',
                            payload: {
                                newCustomers4: evt.target.value
                            }
                        }))} />

                </> : <> </>

}
                <br />
                <br />
                <Link to="/solution">
                    <button className="btn">Back</button>
                </Link>
                

                <button onClick={handleSubmit} className="btn">Submit</button>

                <Link to="/market">
                    <button className="btn">Next</button>
                </Link>
                
                </form>
            
                
            
        </>
    )
}

export default SectionFourTraction;