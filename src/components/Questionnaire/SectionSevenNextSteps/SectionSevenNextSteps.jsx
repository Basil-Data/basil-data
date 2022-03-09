import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import '../Questionnaire.css'
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav'

function SectionSevenNextSteps () {

    const dispatch = useDispatch();
    // store.section6 contains all of the selections for
    // this page of the questionnaire
    const section7 = useSelector((store) => store.section7);

    const [fundraisingSelection, setFundraisingSelection] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [investmentSelection, setInvestmentSelection] = useState([]);
    const [fundingUse, setFundingUse] = useState([]);
    const [nextSteps, setNextSteps] = useState('');
    const [wayAhead, setWayAhead] = useState([]);
    const [societalImpact, setSocietalImpact] = useState('');
    const [environmentalImpact, setEnvironmentalImpact] = useState('');
    const [economicImpact, setEconomicImpact] = useState('');
    const [understanding, setUnderstanding] = useState('');

    useEffect(() => {
        dispatch({
            type: "FETCH_NEXT_STEPS",
        });
    }, []);

    const handleInvestmentType = (event) => {
        const index = investmentSelection.indexOf(event.target.value)
        if (index === -1) {
            setInvestmentSelection([...investmentSelection, event.target.value])
        } else {
            setInvestmentSelection(investmentSelection.filter((investmentSelection) => investmentSelection !== event.target.value))
        }
    }

    const handleFundraising = (event) => {
        const index = fundingUse.indexOf(event.target.value)
        if (index === -1) {
            setFundingUse([...fundingUse, event.target.value])
        } else {
            setFundingUse(fundingUse.filter((fundingUse) => fundingUse !== event.target.value))
        }
    }

    const handleWayAhead = (event) => {
        const index = fundingUse.indexOf(event.target.value)
        if (index === -1) {
            setWayAhead([...wayAhead, event.target.value])
        } else {
            setWayAhead(wayAhead.filter((wayAhead) => wayAhead !== event.target.value))
        }
    }

    return (
        <>
        <QuestionnaireNav/>

        <h1 className='questionnaireForm'>Section 7 - Next Steps</h1>
        <p className='questionnaireForm'>
            Where do you go from here?
        </p>
        <p className='questionnaireForm'>In this section you have the opportunity to detail 
            the amount of funding you require, how you plan to 
            use it, and what your next priorities are. 
        </p>

    <form className='questionnaireForm'>

        <h5>Are you currently raising funds?</h5>
        <RadioGroup
            aria-labelledby = "raising-funds"
            defaultValue = ""
            row
            name = "radio-buttons-group"
            className = 'centerHelp'
            value = {fundraisingSelection}
            onChange = {(event) =>
                { setFundraisingSelection(event.target.value) }
            }
        >
            <FormControlLabel labelPlacement="top" value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel labelPlacement="top" value="no" control={<Radio />} label="No" />
            <FormControlLabel labelPlacement="top" value="maybe" control={<Radio />} label="Maybe" />
        </RadioGroup>

        {fundraisingSelection === 'yes' &&
            <>
            <h5>What is your target amount? (in dollars)?</h5>
            <TextField 
                id="outlined-basic" 
                label="Fundraising Target" 
                variant="outlined"
                value={targetAmount}
                onChange={(event) =>
                    { setTargetAmount(event.target.value) }
                }
            />
            </>
        }

        <h5>What type of investment vehicle are you looking for?</h5>
        <Box className='questionnaireForm centerHelp' sx={{ display: 'flex' }}>
            <FormControl className='questionnaireForm' sx={{ m : 3}}>
                {section7.results1?.map(type => (
                        <FormControlLabel 
                            key={type.id} 
                            control={
                                <Checkbox
                                    value={type.id}
                                    onChange={handleInvestmentType}
                                />} 
                            label={type.investmentVehicle} 
                        />
                ))}
            </FormControl>
        </Box>

        <h5>How will you use the funding received?</h5>
        <Box className='questionnaireForm centerHelp' sx={{ display: 'flex' }}>
            <FormControl className='questionnaireForm' sx={{ m : 3}}>
                {section7.results2?.map(use => (
                        <FormControlLabel 
                            key={use.id} 
                            control={
                                <Checkbox
                                    value={use.id}
                                    onChange={handleFundraising}
                                />} 
                            label={use.fundingUse}
                            
                        />
                ))}
            </FormControl>
        </Box>

        <h5>What are the next steps for your enterprise?</h5>
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
                    label="Next Steps" 
                    variant="outlined" 
                    multiline rows={5} 
                    fullWidth
                    value={nextSteps}
                    onChange={(event) =>
                        { setNextSteps(event.target.value) }
                    }
                />
            </Box>
        </Grid>

        <h5>How else can we help you move forward?</h5>
        <Box className='questionnaireForm centerHelp' sx={{ display: 'flex' }}>
            <FormControl className='questionnaireForm' sx={{ m : 3}}>
                {section7.results3?.map(approach => (
                        <FormControlLabel 
                            key={approach.id} 
                            control={
                                <Checkbox
                                    value={approach.id}
                                    onChange={handleWayAhead} 
                                />
                            } 
                            label={approach.assistance} 
                        />
                ))}
            </FormControl>
        </Box>

        <h4>Matching Questions</h4>
        <p>In this last section we ask you questions to hopefully match you with potential 
            investors in the future as our platform develops!
        </p>

        <h5>Classify your impact on Society.</h5>
        <p>By impact on society we are referring to your organization's effect on the social fabric 
            of the community and well-being of the individuals and families you serve
        </p>
        <RadioGroup
            aria-labelledby="social-impact"
            defaultValue=""
            name="radio-buttons-group"
            value = {societalImpact}
            onChange = {(event) =>
                { setSocietalImpact(event.target.value) }
            }
        >
            {section7.results4?.map(impact => (
                <FormControlLabel 
                    key={impact.id}
                    value={impact.id}
                    control={<Radio />} 
                    label={impact.impact} 
                    className='centerHelp' 
                />
            ))}
        </RadioGroup>

        <h5>Classify your impact on the environment.</h5>
        <p>This question refers to how your organization avoids of the depletion of natural 
            resources in order to maintain an ecological balance.
        </p>
        <RadioGroup
            aria-labelledby="environmental-impact"
            defaultValue=""
            name="radio-buttons-group"
            value = {environmentalImpact}
            onChange = {(event) =>
                { setEnvironmentalImpact(event.target.value) }
            }
        >
            {section7.results5?.map(impact => (
                <FormControlLabel 
                    key={impact.id} 
                    control={<Radio />} 
                    label={impact.impact} 
                    className='centerHelp' 
                />
            ))}
        </RadioGroup>

        <h5>Classify your impact on economic development.</h5>
        <p>This question is meant to classify your organization's effect on wealth and 
            economic growth for individuals or communities.
        </p>
        <RadioGroup
            aria-labelledby="economic-impact"
            defaultValue=""
            name="radio-buttons-group"
            value = {economicImpact}
            onChange = {(event) =>
                { setEconomicImpact(event.target.value) }
            }
        >
            {section7.results6?.map(impact => (
                <FormControlLabel 
                    key={impact.id} 
                    control={<Radio />} 
                    label={impact.impact} 
                    className='centerHelp' 
                />
            ))}
        </RadioGroup>

        <h5>How well do you understand the problem?</h5>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            row
            name="radio-buttons-group"
            className='centerHelp'
            value = {understanding}
            onChange = {(event) =>
                { setUnderstanding(event.target.value) }
            }
        >
            <FormControlLabel labelPlacement="top" value="1" control={<Radio />} label="1" />
            <FormControlLabel labelPlacement="top" value="2" control={<Radio />} label="2" />
            <FormControlLabel labelPlacement="top" value="3" control={<Radio />} label="3" />
            <FormControlLabel labelPlacement="top" value="4" control={<Radio />} label="4" />
            <FormControlLabel labelPlacement="top" value="5" control={<Radio />} label="5" />
            <FormControlLabel labelPlacement="top" value="6" control={<Radio />} label="6" />
            <FormControlLabel labelPlacement="top" value="7" control={<Radio />} label="7" />
            <FormControlLabel labelPlacement="top" value="8" control={<Radio />} label="8" />
            <FormControlLabel labelPlacement="top" value="9" control={<Radio />} label="9" />
            <FormControlLabel labelPlacement="top" value="10" control={<Radio />} label="10" />
        </RadioGroup>
        <Link to="/risks-and-hurdles"><button className="btn">Back</button></Link>
        <button className="btn">Submit</button>
        <Link to="/story"><button className="btn">Next</button></Link>

    </form>
    </>
    )
};

export default SectionSevenNextSteps;