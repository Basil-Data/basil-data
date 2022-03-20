import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import '../Questionnaire.css'
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';
import AdminInputBox from '../../AdminInputBox/AdminInputBox';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function SectionSevenNextSteps () {

    const dispatch = useDispatch();
    const history = useHistory();
    // store.section6 contains all of the selections for
    // this page of the questionnaire

    const [open, setOpen] = React.useState(false);

    history.scrollRestoration = 'manual';

    const section7 = useSelector((store) => store.section7);
    const section7Enterprise = useSelector((store) => store.section7Enterprise);
    const investmentSelection = useSelector((store) => store.section7Enterprise.investmentVehicleId);
    const fundingUse = useSelector((store) => store.section7Enterprise.fundingUseId);
    const wayAhead = useSelector((store) => store.section7Enterprise.assistanceId);
    const selectedEnterprise = useSelector(store => store.adminReducer.selectedEnterprise);

    console.log('section7Enterprise.societalImpactId.societalImpactId:', section7Enterprise.societalImpactId.societalImpactId);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: "FETCH_NEXT_STEPS",
        });
        dispatch({ 
            type: "FETCH_ENTERPRISE_SECTION_SEVEN",
            payload: selectedEnterprise
        })
    }, []);

    const handleInvestmentType = (event) => {
        const index = investmentSelection.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {investmentVehicleId: [...investmentSelection, Number(event.target.value)]}
            });
        } else {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {investmentVehicleId: investmentSelection.filter((investmentSelection) => investmentSelection !== Number(event.target.value))}
            });
        }
    }

    const handleFundraising = (event) => {
        const index = fundingUse.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {fundingUseId: [...fundingUse, Number(event.target.value)]}
            });
        } else {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {fundingUseId: fundingUse.filter((fundingUse) => fundingUse !== Number(event.target.value))}
            });
        }
    }

    const handleWayAhead = (event) => {
        const index = wayAhead.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {assistanceId: [...wayAhead, Number(event.target.value)]}
            });
        } else {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {assistanceId: wayAhead.filter((wayAhead) => wayAhead !== Number(event.target.value))}
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);

        dispatch({
            type: 'PUT_SECTION_SEVEN',
            payload: {
                ...section7Enterprise,
                id: selectedEnterprise
            }
        })
    };

    const onNext = (event) => {
        handleSubmit(event);
        history.push('/user');
    }

    const onBack = (event) => {
        handleSubmit(event);
        history.push('/risks-and-hurdles');
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleAdminDispatch = (event) => {
        dispatch({
            type: 'SET_NEXT_STEPS_ENTERPRISE',
            payload: {admin7: event}
        })
    }


    return (
        <>
        <QuestionnaireNav/>
        <Paper className="formPaper" elevation={3}>
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
            value = {section7Enterprise.raisingFunds7}
            onChange = {(event) =>
                { dispatch({
                    type: "SET_NEXT_STEPS_ENTERPRISE",
                    payload: {raisingFunds7: event.target.value}
                }); }
            }
        >
            <FormControlLabel labelPlacement="top" value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel labelPlacement="top" value="no" control={<Radio />} label="No" />
            <FormControlLabel labelPlacement="top" value="maybe" control={<Radio />} label="Maybe" />
        </RadioGroup>

        {section7Enterprise.raisingFunds7 === 'yes' &&
            <>
            <h5>What is your target amount? (in dollars)?</h5>
            <TextField 
                id="outlined-basic" 
                label="Fundraising Target" 
                variant="outlined"
                type="number"
                value={section7Enterprise.targetAmount7 ?? ''}
                onChange = {(event) =>
                    { dispatch({
                        type: "SET_NEXT_STEPS_ENTERPRISE",
                        payload: {targetAmount7: Number(event.target.value)}
                    }); }
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
                            checked={investmentSelection.includes(type.id)}
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
                            checked={fundingUse.includes(use.id)} 
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
                    value={section7Enterprise.nextSteps7 ?? ''}
                    onChange = {(event) =>
                        { dispatch({
                            type: "SET_NEXT_STEPS_ENTERPRISE",
                            payload: {nextSteps7: event.target.value}
                        }); }
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
                            checked={wayAhead.includes(approach.id)}  
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
            defaultValue={0}
            name="radio-buttons-group"
            className="buttonCenter2"
            value = {Number(section7Enterprise.societalImpactId)}
            onChange = {(event) =>
                { dispatch({
                    type: "SET_NEXT_STEPS_ENTERPRISE",
                    payload: {societalImpactId: event.target.value}
                }); }
            }
        >
            {section7.results4?.map(impact => (
                <FormControlLabel 
                    key={impact.id}
                    value={impact.id}
                    control={<Radio />} 
                    label={impact.societalImpact}
                />
            ))}
        </RadioGroup>

        <h5>Classify your impact on the environment.</h5>
        <p>This question refers to how your organization avoids of the depletion of natural 
            resources in order to maintain an ecological balance.
        </p>
        <RadioGroup
            aria-labelledby="environmental-impact"
            defaultValue={0}
            name="radio-buttons-group"
            className="buttonCenter2"
            value = {section7Enterprise.environmentalImpactId}
            onChange = {(event) =>
                { dispatch({
                    type: "SET_NEXT_STEPS_ENTERPRISE",
                    payload: {environmentalImpactId: event.target.value}
                }); }
            }
        >
            {section7.results5?.map(impact => (
                <FormControlLabel 
                    key={impact.id} 
                    control={<Radio />}
                    value={impact.id} 
                    label={impact.impact} 
                />
            ))}
        </RadioGroup>

        <h5>Classify your impact on economic development.</h5>
        <p>This question is meant to classify your organization's effect on wealth and 
            economic growth for individuals or communities.
        </p>
        <RadioGroup
            aria-labelledby="economic-impact"
            name="radio-buttons-group"
            defaultValue={0}
            className='buttonCenter2' 
            value = {section7Enterprise.economicImpactId}
            onChange = {(event) =>
                { dispatch({
                    type: "SET_NEXT_STEPS_ENTERPRISE",
                    payload: {economicImpactId: event.target.value}
                }); }
            }
        >
            {section7.results6?.map(impact => (
                <FormControlLabel 
                    key={impact.id} 
                    control={<Radio />}
                    value={impact.id} 
                    label={impact.impact} 
                />
            ))}
        </RadioGroup>

        <h5>How well do you understand the problem?</h5>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            row
            name="radio-buttons-group"
            className='centerHelp'
            value = {section7Enterprise.understandProblem7}
            onChange = {(event) =>
                { dispatch({
                    type: "SET_NEXT_STEPS_ENTERPRISE",
                    payload: {understandProblem7: Number(event.target.value)}
                }); }
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

        <Link to="/risks-and-hurdles">
            <button 
                className="btn"
                onClick={(event) => onBack(event)}
            >
                Back
            </button>
        </Link>
        
        <button 
            className="btn"
            onClick={(event) => handleSubmit(event)}
        >
            Save
        </button>

        {/* 
            Below should link should change from story to 
            whatever comes after last step in questionnaire 
        */}
        <Link to="/story">
            <button 
                className="btn"
                onClick={(event) => onNext(event)}
            >
                Next
            </button>
        </Link>

    </form>

    {/* <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Questionnaire saved!
        </Alert>
    </Snackbar> */}

    <AdminInputBox
        value={section7Enterprise.admin7}
        callback={handleAdminDispatch}
    />

    </Paper>
    </>
    )
};

export default SectionSevenNextSteps;